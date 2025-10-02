# Wokwi-laitteiden dokumentaatiot

## LCD-tervehdyslaite

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

