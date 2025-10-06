import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = 3000;

// Discord Webhook URL
const DISCORD_WEBHOOK_URL =
  "https://discord.com/api/webhooks/1423255225501749260/JMHE5IGoXiw3yhdJFXsnX6gs_xgZfgzDeVS_hWvaJhZy_AzV_MA4aqTfFsI66IZzdJl3";

// ThingSpeak-kanavan tiedot
const CHANNEL_ID = "3099297";
const FIELD = 1;
const READ_KEY = "A7HJYV5W8GH4RU3H";
const URL = `https://api.thingspeak.com/channels/${CHANNEL_ID}/fields/${FIELD}.json?results=1&api_key=${READ_KEY}`;

// Tarkistaa uusimman lämpötilan ja lähettää viestin jos ≥ 75 °C
async function checkTemperature() {
  try {
    const res = await fetch(URL);
    const data = await res.json();
    const latest = data.feeds[0];
    const temp = parseFloat(latest[`field${FIELD}`]);

    console.log("Saunan Lämpötila:", temp);

    if (temp >= 75) {
      const msg = "Sauna on lämmin!";
      await fetch(DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: msg }),
      });
      console.log("Discord-viesti lähetetty!");
    }
  } catch (err) {
    console.error("Virhe datan haussa tai viestin lähetyksessä:", err);
  }
}

// Tarkistetaan lämpötila 30 sekunnin välein
setInterval(checkTemperature, 30000);

// Käynnistetään Express-palvelin
app.listen(PORT, () =>
  console.log(`Webhook-palvelin käynnissä portissa ${PORT}`)
);
