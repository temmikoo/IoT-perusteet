# Wokwi-laitteiden dokumentaatiot

## LCD-display

**Mikrokontrolleri:** Raspberry Pi Pico  
**Kieli:** MicroPython  

### Kuvaus
Laite näyttää tekstin "Hello student!" I2C-liitännäisellä LCD-näytöllä heti käynnistyksen jälkeen.

### Toimintaperiaate
1. Odottaa hetken, jotta laite ehtii käynnistyä.  
2. Alustaa I2C-väylän ja LCD-näytön.  
3. Tulostaa näytölle tekstin "Hello student!".

### Käytetyt komponentit
- Raspberry Pi Pico  
- I2C LCD -näyttö (20x4)

### Koodin toiminta tiivistettynä
Koodi muodostaa yhteyden I2C-näyttöön ja tulostaa näytölle tervehdyksen.

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

## LED on and off
Ohjelma vilkuttaa Raspberry Pi Picon sisäistä LEDiä.  
LED sytytetään komennolla `led.value(1)` ja sammutetaan komennolla `led.value(0)`.  
LED palaa 0,4 sekuntia kerrallaan ja sammuu 0,4 sekunniksi, toistuen loputtomasti.


