/*
File: Chart.js
Purpose: Fetches temperature data from ThingSpeak and visualizes it as a line chart using Google Charts.
Author: Teemu Koivukangas
Date: 2025-10-06
*/

const CHANNEL_ID = "3099297";
const FIELD_NUM = "1";
const READ_API_KEY = "A7HJYV5W8GH4RU3H";

const THINGSPEAK_URL = `https://api.thingspeak.com/channels/${CHANNEL_ID}/fields/${FIELD_NUM}.json?results=100${
  READ_API_KEY ? `&api_key=${READ_API_KEY}` : ""
}`;

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  fetch(THINGSPEAK_URL)
    .then((response) => response.json())
    .then((data) => {
      const feeds = data.feeds;
      const chartData = [["Time", "Temperature"]];
      const now = new Date();
      const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);

      feeds.forEach((feed) => {
        const time = new Date(feed.created_at);
        const temp = parseFloat(feed[`field${FIELD_NUM}`]);
        if (!isNaN(temp) && time >= oneDayAgo) {
          chartData.push([
            time.toLocaleString([], {
              day: "2-digit",
              month: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
            }),
            temp,
          ]);
        }
      });

      var dataTable = google.visualization.arrayToDataTable(chartData);

      var options = {
        title: "Saunan lämpötila",
        curveType: "function",
        legend: { position: "none" },
        hAxis: { title: "Aika" },
        vAxis: { title: "Lämpötila (°C)" },
      };

      var chart = new google.visualization.LineChart(
        document.getElementById("curve_chart")
      );

      chart.draw(dataTable, options);
    })
    .catch((error) => {
      document.getElementById("curve_chart").innerText = "Error loading data.";
      console.error(error);
    });
}
