import { filterDataStart, populatePredictionData } from "./data";
import axios from 'axios';

let cache = {
    data: null,
    timestamp: null
};

export async function GET() {
    // check if the cache is valid
    const now = Date.now();
    let cacheFromYesterday = !cache.timestamp || new Date(cache.timestamp).getDate() !== new Date(now).getDate()
    let nowPast1UTC = new Date(now).getUTCHours() >= 1;
    let cacheValid = !(cacheFromYesterday && nowPast1UTC) && cache.data;
    if (cacheValid) {
        return Response.json(cache.data);
    }

    try {
        const response = await axios.get('https://services.swpc.noaa.gov/text/3-day-forecast.txt');

        // Process the response to convert it to JSON
        const forecastText = response.data;

        // Split the text into lines and filter out empty lines
        const forecastLines = forecastText.split('\n').filter(line => line.trim() !== '');

        const forecastData = forecastLines.map(line => {
            return { line: line.trim() };
        });

        let predictions = filterDataStart(forecastData);
        const dates = predictions[0].line
        let predictionData = populatePredictionData(predictions, dates);

        // Update the cache
        cache.data = predictionData;
        cache.timestamp = now;
        return Response.json(predictionData);
    } catch (error) {
        console.error('Error fetching forecast:', error);
        return Response.json({ error: 'Failed to fetch forecast data' });
    }
}