"use client";
import React, { useEffect } from "react";

const SunsetPage: React.FC = () => {
  let lat = 49.1913033;
  let lon = -122.849143;
  let [sunsetScores, setSunsetScores] = React.useState<any>(null);
  useEffect(() => {
    fetch(`/api/weatherForecast?lat=${lat}&lon=${lon}`).then((response) => {
      response.json().then((data) => {
        console.log(data);
        setSunsetScores(data);
      });
    });
  }, []);

  // TODO display the weather forecast data
  return (
    <div className="container flex justify-center my-auto">
      {sunsetScores ? (
        <div>
          <h1>Weather Forecast</h1>
          <ul className="flex gap-4">
            {sunsetScores.map((score: any, index: number) => (
              <li key={index}>
                <p>Date: {score.date}</p>
                <p>Sunset Time: {score.sunsetTime}</p>
                <p>Score: {score.score.score}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SunsetPage;
