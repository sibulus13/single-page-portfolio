import { NextRequest } from "next/server";
import { WeatherForecast, Prediction } from "@/app/Sunset/types";

// fetches the weather forecast for a given location via open-meteo
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const latitude = searchParams.get("lat");
  const longitude = searchParams.get("lon");
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=relative_humidity_2m,cloud_cover,cloud_cover_low,cloud_cover_mid,cloud_cover_high,visibility&daily=sunrise,sunset,daylight_duration,sunshine_duration`;
  // console.log(url);
  // const airQualityURL = `https://api.open-meteo.com/v1/airquality?latitude=${latitude}&longitude=${longitude}`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(res.statusText);
      throw new Error("Failed to fetch forecast data");
    }
    const weatherForecast = await res.json();
    // console.log(weatherForecast);
    let predictions = getSunsetPredictions(weatherForecast);

    return Response.json(predictions);
  } catch (error) {
    console.error("Error fetching forecast:", error);
    return Response.json({ error: "Failed to fetch forecast data" });
  }
}

// Calculates the sunset predictions based on the forecast data
export function getSunsetPredictions(forecast: WeatherForecast) {
  // console.log(forecast);
  let predictions = [];
  const numberOfDays = forecast.daily.time.length;
  // Get the sunset and sunrise times for each day
  for (let i = 0; i < numberOfDays; i++) {
    let startTime = forecast.daily.sunset[i].slice(0, -2) + "00";
    // console.log(startTime);
    let sunset_start_hourly_index = forecast.hourly.time.findIndex(
      (time: string) => {
        return time === startTime;
      }
    );
    if (sunset_start_hourly_index === -1) {
      console.error(
        "Error: Sunset time not found in hourly forecast for",
        forecast.daily.time[i]
      );
      continue;
    }
    let sunset_end_hourly_index = sunset_start_hourly_index + 1;
    let interpolateRatio = Number(forecast.daily.sunset[i].slice(-2)) / 60;
    let prediction = {
      date: forecast.daily.time[i],
      // TODO: extrapolate to sunrise as well
      // sunrise: forecast.daily.sunrise[i],
      start_time: startTime,
      sunset: forecast.daily.sunset[i],
      daylight_duration: forecast.daily.daylight_duration[i],
      golden_hour_duration: calculateGoldenHour(
        forecast.daily.sunset[i],
        forecast.daily.daylight_duration[i]
      ),
      sunset_start_hourly_index: sunset_start_hourly_index,
      sunset_end_hourly_index: sunset_end_hourly_index,
      sunset_window: {
        start: forecast.hourly.time[sunset_start_hourly_index],
        end: forecast.hourly.time[sunset_end_hourly_index],
      },
      cloud_cover: {
        start: forecast.hourly.cloud_cover[sunset_start_hourly_index],
        end: forecast.hourly.cloud_cover[sunset_end_hourly_index],
        interpolate: interpolate(
          forecast.hourly.cloud_cover[sunset_start_hourly_index],
          forecast.hourly.cloud_cover[sunset_end_hourly_index],
          interpolateRatio
        ),
      },
      cloud_cover_low: {
        start: forecast.hourly.cloud_cover_low[sunset_start_hourly_index],
        end: forecast.hourly.cloud_cover_low[sunset_end_hourly_index],
        interpolate: interpolate(
          forecast.hourly.cloud_cover_low[sunset_start_hourly_index],
          forecast.hourly.cloud_cover_low[sunset_end_hourly_index],
          interpolateRatio
        ),
      },
      cloud_cover_mid: {
        start: forecast.hourly.cloud_cover_mid[sunset_start_hourly_index],
        end: forecast.hourly.cloud_cover_mid[sunset_end_hourly_index],
        interpolate: interpolate(
          forecast.hourly.cloud_cover_mid[sunset_start_hourly_index],
          forecast.hourly.cloud_cover_mid[sunset_end_hourly_index],
          interpolateRatio
        ),
      },
      cloud_cover_high: {
        start: forecast.hourly.cloud_cover_high[sunset_start_hourly_index],
        end: forecast.hourly.cloud_cover_high[sunset_end_hourly_index],
        interpolate: interpolate(
          forecast.hourly.cloud_cover_high[sunset_start_hourly_index],
          forecast.hourly.cloud_cover_high[sunset_end_hourly_index],
          interpolateRatio
        ),
      },
      visibility: {
        start: forecast.hourly.visibility[sunset_start_hourly_index],
        end: forecast.hourly.visibility[sunset_end_hourly_index],
        interpolate: interpolate(
          forecast.hourly.visibility[sunset_start_hourly_index],
          forecast.hourly.visibility[sunset_end_hourly_index],
          interpolateRatio
        ),
      },
      humidity: {
        start: forecast.hourly.relative_humidity_2m[sunset_start_hourly_index],
        end: forecast.hourly.relative_humidity_2m[sunset_end_hourly_index],
        interpolate: interpolate(
          forecast.hourly.relative_humidity_2m[sunset_start_hourly_index],
          forecast.hourly.relative_humidity_2m[sunset_end_hourly_index],
          interpolateRatio
        ),
      },
    };
    let sunsetScore = calculateSunsetScore(prediction);
    let res = {
      score: sunsetScore,
      goldenHour: { start: null, end: null },
      sunsetTime: null,
      cloudCoverage: null,
    };
    predictions.push(res);
  }
  console.log(predictions);
  console.log(predictions.length);
  // TODO calculate sunrise metric
  // TODO add Air Quality to calculation
  return predictions;
}

// Calculate the golden hour based on the sunset time and daylight duration
function calculateGoldenHour(sunset: string, daylight_duration: number) {
  let goldenHourDuration = (daylight_duration / 60 / 12) * 0.9; // 5% of daylight duration
  let sunsetDate = new Date(sunset + "Z"); // set as UTC
  let goldenHour = new Date(sunsetDate.getTime());
  goldenHour.setMinutes(goldenHour.getMinutes() - goldenHourDuration);
  let goldenHourString = goldenHour.toISOString();
  return goldenHourString;
}

function interpolate(start: number, end: number, ratio: number) {
  return start + (end - start) * ratio;
}

// Calculate the sunset score based on the prediction
function calculateSunsetScore(prediction: any) {
  let score = 1;
  // calculate cloud coverage score
  let cCScore = cloudCoverageScore(prediction);
  // calculate visibility score
  let vsScore = visibilityScore(prediction);
  // calculate humidity score
  let hScore = humidityScore(prediction);
  // TODO calculate air quality score
  score *= 1;

  score *= cCScore * vsScore * hScore;

  return {
    score: score,
    cloudCoverage: cCScore,
    visibility: vsScore,
    humidity: hScore,
  };
}

// Calculate the humidity score based on the prediction
// Inverse relationship between humidity and sunset quality
function humidityScore(prediction: Prediction) {
  if (prediction.humidity.interpolate > 80) {
    return 0.7;
  }
  if (prediction.humidity.interpolate > 60) {
    return 0.8;
  }
  if (prediction.humidity.interpolate > 40) {
    return 0.9;
  }
  return 1;
}

function visibilityScore(prediction: Prediction) {
  // TODO finetune these thresholds
  // How does air pollution affect visibility? Since air pollution makes for more vibrant sunsets
  // Obviously too little visibility is bad
  // Lets assume that 10km visibility is the threshold
  // and 30km visibility is the threshold
  if (prediction.visibility.interpolate < 10000) {
    return 0.7;
  }
  if (prediction.visibility.interpolate < 20000) {
    return 0.9;
  }
  return 1;
}

function cloudCoverageScore(prediction: Prediction) {
  // Sunset is affected by cloud coverage split by low vs mid/high clouds
  // Too much low cloud coverage (>50%) is bad
  // Some mid/high cloud coverage (cirrus) can be good
  // Lets assume that 50% low cloud coverage is the threshold
  // and 40% mid/high cloud coverage is the threshold
  // TODO finetune these thresholds
  let score = 1;
  // calculate overall cloud cover score
  // Too little or too much cloud coverage is bad
  // The ideal cloud coverage is around 40%
  if (
    prediction.cloud_cover.interpolate > 90 ||
    prediction.cloud_cover.interpolate < 10
  ) {
    score *= 0.5;
  } else {
    score *= 1 - Math.abs(prediction.cloud_cover.interpolate - 40) / 100;
  }

  // calculate low cloud cover score
  // Form an inverse relationship between low cloud coverage and sunset quality
  // Assuming Cloud coverage above 40% is bad
  // Assuming ideal low cloud coverage is around 15%
  // TODO finetune these thresholds
  if (prediction.cloud_cover_low.interpolate > 40) {
    score *= 1 - prediction.cloud_cover_low.interpolate / 100;
  } else {
    score *= 1 - Math.abs(prediction.cloud_cover_low.interpolate - 15) / 100;
  }

  return score;
}
