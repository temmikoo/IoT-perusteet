google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  fetch(
    "https://api.thingspeak.com/channels/3080645/feeds.json?api_key=FYQWFSIX5LDK6K57"
  )
    .then((r) => r.json())
    .then((data) => {
      const chartData = [["Time", "Temperature"]];
      (data.feeds || []).forEach((feed) => {
        if (feed.field1 !== null) {
          chartData.push([new Date(feed.created_at), parseFloat(feed.field1)]);
        }
      });

      const dataTable = google.visualization.arrayToDataTable(chartData);
      const options = {
        title: "Joulusaunan lämmitys mökillä",
        curveType: "function",
        legend: { position: "bottom" },
      };

      const chart = new google.visualization.LineChart(
        document.getElementById("curve_chart")
      );
      chart.draw(dataTable, options);
    });
}
