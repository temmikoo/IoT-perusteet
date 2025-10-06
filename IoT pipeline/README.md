# Saunan lämpömittari

## Projektin tavoite  
Projektin tavoitteena oli toteuttaa toimiva **IoT-pipeline**, joka mittaa saunan lämpötilan, lähettää datan pilveen, esittää sen graafisesti ja lähettää viestin Discordiin, kun lämpötila ylittää asetetun rajan.

---

## Pipeline-kokonaisuus  
**DHT22 + LCD + Pico W → ThingSpeak → Google Charts (Front end)**  
                              ↳ **Discord webhook (viesti)**

### Komponentit  

| Kerros | Teknologia | Kuvaus |
|---------|-------------|--------|
| **Laitetaso** | Raspberry Pi Pico W + DHT22 + LCD | Mittaa lämpötilan, näyttää sen näytöllä ja lähettää ThingSpeakiin |
| **Pilvikerros** | ThingSpeak | Vastaanottaa ja tallentaa lämpötiladatan sekä tarjoaa avoimen API-rajapinnan |
| **Sovelluskerros** | VS Code + HTML + JavaScript + Node.js | Visualisoi lämpötiladatan viimeisen 24 tunnin ajalta Google Charts -kaavioon ja lähettää viestin Discordiin lämpötilan ylittäessä 75 °C |

---

## 1. Wokwi-simuloitu laite  
Raspberry Pi Pico W lukee DHT22-anturin lämpötilatiedot ja lähettää ne 15 sekunnin välein ThingSpeak-pilvipalveluun.  
Laitteeseen on liitetty LCD-näyttö, joka näyttää viimeisimmän mitatun lämpötilan.  
Wi-Fi-yhteys muodostetaan avoimeen Wokwi-GUEST-verkkoon.  
Ohjelmointi on toteutettu MicroPythonilla, ja laite toimii Wokwi-simulaatiossa.

---

## 2. Front end (Google Charts)  
Front end on kevyt HTML- ja JavaScript-pohjainen web-sovellus, joka hakee ThingSpeakista lämpötiladatan JSON-muodossa ja piirtää siitä kaavion Google Charts -kirjastolla.
Kaavio näyttää viimeisen 24 tunnin lämpötilakehityksen ja päivittyy aina, kun sivu ladataan.

---

## 3. Webhook (Discord-viesti)  
Node.js-sovellus toimii webhookina, joka tarkistaa säännöllisesti ThingSpeakin uusimman lämpötilan.  
Kun lämpötila ylittää 75 °C, ohjelma lähettää automaattisesti viestin Discord-kanavaan:  
**"Sauna on lämmin!"**

Tarkistus tehdään 15 minuutin välein.  
Webhook on toteutettu `express`- ja `node-fetch`-kirjastoilla.

---

## 4. Yhteenveto  
- Datan keruu, lähetys ja tallennus tapahtuvat automaattisesti.  
- Front end esittää lämpötilakäyrän viimeisen 24 tunnin ajalta.  
- Discord-viesti ilmoittaa, kun lämpötila ylittää 75 °C.  
- Kokonaisuus muodostaa toimivan IoT-pipelinen.

## 5. Jatkokehitys
Laite on periaatteessa toteutuskelpoinen tässä muodossa esimerkiksi henkilökohtaiseen kotikäyttöön. Kaupalliseen käyttöön ajateltuna kokonaisuuteen tulisi kehittää esimerkiksi mobiilisovellus, josta käyttäjä näkisi lämpötilan ja voisi itse asettaa halutun raja-arvon, jonka ylittäessä sovellus ilmoittaisi saunan olevan lämmin. Discord viesti ei ole optimaalisin tapa toteuttaa ilmoitusta, vaan esimerkiksi sovelluksen sisäinen push-ilmoitus oli käytännöllisempi.
