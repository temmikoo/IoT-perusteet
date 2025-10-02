# Wokwi-laitteiden dokumentaatiot

---

## LCD display
Laite näyttää tekstin "Hello student!" I2C-liitännäisellä LCD-näytöllä heti käynnistyksen jälkeen.  
Ohjelma alustaa I2C-väylän ja muodostaa yhteyden LCD-näyttöön osoitteessa 0x27.  
Näytölle tulostetaan viesti "Hello student!".

---

## Ask username
Käyttäjä syöttää käyttäjätunnuksen.  
Jos nimi on **"Clark Kent"**, ohjelma tulostaa **"You are the Superman!"**.  
Muussa tapauksessa tulostetaan **"You are an ordinary person."**

---

## Blink external LED
Ohjelma saa LEDin vilkkumaan jatkuvasti.  
LED on kytketty GPIO15-nastaan ja vaihtaa tilaansa (päällä/pois) 0,4 sekunnin välein.  
Tämä luo tasaisen vilkutuksen, joka jatkuu loputtomasti.

---

## Blink onboard LED
Ohjelma vilkuttaa Raspberry Pi Picon sisäistä LEDiä.  
LED sytytetään komennolla `led.value(1)` ja sammutetaan komennolla `led.value(0)`.  
LED palaa 0,4 sekuntia kerrallaan ja sammuu 0,4 sekunniksi, toistuen loputtomasti.

---

## Blink onboard LED optimized
Ohjelma vilkuttaa Raspberry Pi Picon sisäistä LEDiä jatkuvasti.  
LEDin tila vaihdetaan komennolla `led.toggle()`, jolloin se syttyy ja sammuu vuorotellen.  
Vilkutuksen taajuus on 0,4 sekuntia.

---

## Burglary alarm
Ohjelma toimii liikkeentunnistimena PIR-anturin avulla.  
Käynnistyksen yhteydessä ohjelma tulostaa viestit, jotka kuvaavat hälytysjärjestelmän aktivoitumista.  
Kun PIR-anturi havaitsee liikettä (arvo 1), ohjelma tulostaa "Motion detected!" ja odottaa 2 sekuntia ennen seuraavaa tarkistusta.

---

## LED with button
Ohjelma sytyttää LEDin, kun painiketta painetaan, ja sammuttaa sen, kun painike vapautetaan.  
Painike on liitetty GPIO13-nastaan ja LED GPIO18-nastaan.  
Ohjelma tunnistaa painalluksen, kun painikkeen arvo on 0.

---

## Print numbers
Ohjelma tulostaa luvut 1–9 peräkkäin.  
Tulostus tapahtuu `for`-silmukassa, joka käy läpi luvut väliltä 1–9 ja näyttää ne näytöllä yksi kerrallaan.

---

## Reaction game
Ohjelma mittaa käyttäjän reaktioajan.  
LED syttyy satunnaisen viiveen jälkeen (5–10 sekuntia), ja käyttäjän tulee painaa painiketta mahdollisimman nopeasti.  
Kun painiketta painetaan, ohjelma laskee ajan LEDin sammumisesta painallukseen ja tulostaa tuloksen millisekunteina.  
Painike on liitetty GPIO14-nastaan ja LED GPIO15-nastaan.

---

## Traffic lights
Ohjelma simuloi liikennevaloja ja reagoi painikkeen painallukseen.  
Punainen, keltainen ja vihreä LED vaihtuvat vuorotellen kuten oikeissa liikennevaloissa.  
Jos painiketta painetaan, punainen LED syttyy ja summeri (buzzer) piippaa noin 20 kertaa ennen valojen normaalia kiertoa.  
LEDit ja summeri ohjataan Picon GPIO-nastoista.

---

## Weather station
Ohjelma lukee lämpötilan ja ilmankosteuden DHT22-anturilta.  
Anturi on kytketty GPIO15-nastaan.  
Ohjelma mittaa arvot kolmen sekunnin välein ja tulostaa ne muodossa "Temperature: X°C" ja "Humidity: Y%".  
Jos anturin lukemisessa tapahtuu virhe, ohjelma tulostaa virheilmoituksen ja yrittää uudelleen.

---

## Weather station with thingspeak
Ohjelma mittaa lämpötilan DHT22-anturilla ja lähettää sen ThingSpeak-palveluun Wi-Fi-yhteyden kautta.  
Laite muodostaa yhteyden verkkoon ja käyttää ThingSpeak API -avainta tallentaakseen lämpötiladatan verkkoon.  
Ohjelma mittaa ja lähettää lämpötilan 15 sekunnin välein sekä tulostaa lämpötilan ja ThingSpeakin palvelimen vastauksen komentoriville.  
Jos sensorin lukemisessa tai tiedonsiirrossa tapahtuu virhe, ohjelma tulostaa virheilmoituksen ja yrittää uudelleen seuraavalla kierroksella.




