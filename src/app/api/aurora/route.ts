import { filterDataStart, populatePredictionData } from "./data";

export async function GET() {
    try {
        const response = await fetch('https://services.swpc.noaa.gov/text/3-day-forecast.txt', { next: { tags: ['aurora'] } });
        if (!response.ok) {
            throw new Error('Failed to fetch forecast data');
        }

        // Process the response to convert it to JSON
        const forecastText = await response.text();;

        // Split the text into lines and filter out empty lines
        const forecastLines = forecastText.split('\n').filter(line => line.trim() !== '');

        const forecastData = forecastLines.map(line => {
            return { line: line.trim() };
        });

        let predictions = filterDataStart(forecastData);
        const dates = predictions[0].line
        let predictionData = populatePredictionData(predictions, dates);
        return Response.json(predictionData);
    } catch (error) {
        console.error('Error fetching forecast:', error);
        return Response.json({ error: 'Failed to fetch forecast data' });
    }
}