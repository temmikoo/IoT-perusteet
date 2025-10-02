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


