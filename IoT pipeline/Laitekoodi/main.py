"""
File: main.py
Purpose: Reads temperature data and sends it to ThingSpeak.
Hardware: Raspberry Pi Pico W + DHT22 sensor + LCD display
Author: Teemu Koivukangas
Date: 2025-10-06
"""

import dht
from machine import I2C, Pin
from pico_i2c_lcd import I2cLcd
import urequests
import time
import network

# DHT22 kytketty datapinniin 15
sensor = dht.DHT22(Pin(15))

# ThingSpeak
THINGSPEAK_API_KEY = 'A7HJYV5W8GH4RU3H'
THINGSPEAK_URL = 'https://api.thingspeak.com/update'

i2c = I2C(0, sda=Pin(4), scl=Pin(5))
lcd = I2cLcd(i2c, 0x27, 2, 16)
DEG = chr(223)                   # °-merkki


#Wi-Fi yhteys
ssid = "Wokwi-GUEST"
password = ""

wlan = network.WLAN(network.STA_IF)
wlan.active(True)
wlan.connect(ssid, password)

print("Yhdistetään Wi-Fiin...", end="")
while not wlan.isconnected():
    print(".", end="")
    time.sleep(0.5)

print("\nYhdistetty")
print("IP-osoite:", wlan.ifconfig()[0])

# Funktio thingspeak lähetystä varten
def send_to_thingspeak(temp):
    try:
        response = urequests.post(
            THINGSPEAK_URL,
            data = 'api_key={}&field1={}'.format(THINGSPEAK_API_KEY, temp),
            headers={'Content-Type': 'application/x-www-form-urlencoded'}
        )
        print("ThingSpeak-vastaus:", response.text)
        response.close()
    except Exception as e:
        print("Lämpötiladatan lähetys epäonnistui:", e)

# Lukee lämpötilan sensorilta 15 sekunnin välein ja lähettää ThingSpeakiin
while True:
    try:
        sensor.measure()
        temperature = sensor.temperature()
        print("Saunan lämpötila:", temperature, "°C")

        lcd.move_to(0, 0)
        txt = f"Sauna {temperature:.1f} {DEG}C"
        lcd.putstr(txt + " " * (16 - len(txt)))


        send_to_thingspeak(temperature)

    except Exception as e:
        print("Virhe lämpötilan lukemisessa tai datan lähettämisessä", e)
    time.sleep(15)



