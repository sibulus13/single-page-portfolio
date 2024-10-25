export type Coordinates = { latitude: number; longitude: number } | null;

export type WeatherForecast = {
  daily: {
    time: string[];
    sunrise: string[];
    sunset: string[];
    daylight_duration: number[];
    sunshine_duration: number[];
  };
  hourly: {
    time: string[];
    relative_humidity_2m: number[];
    cloud_cover: number[];
    cloud_cover_low: number[];
    cloud_cover_mid: number[];
    cloud_cover_high: number[];
    visibility: number[];
  };
};

export type Prediction = {
  date: string;
  start_time: string;
  sunset: string;
  daylight_duration: number;
  golden_hour_duration: string;
  sunset_start_hourly_index: number;
  sunset_end_hourly_index: number;
  sunset_window: {
    start: string;
    end: string;
  };
  cloud_cover: {
    start: number;
    end: number;
    interpolate: number;
  };
  cloud_cover_low: {
    start: number;
    end: number;
    interpolate: number;
  };
  cloud_cover_mid: {
    start: number;
    end: number;
    interpolate: number;
  };
  cloud_cover_high: {
    start: number;
    end: number;
    interpolate: number;
  };
  visibility: {
    start: number;
    end: number;
    interpolate: number;
  };
  humidity: {
    start: number;
    end: number;
    interpolate: number;
  };
};
