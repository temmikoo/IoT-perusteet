## Google Chart
Ohjelmakokonaisuus koostuu kahdesta osasta:  
1. **chart.js** – hakee lämpötiladatan ThingSpeak-palvelusta ja piirtää kaavion.  
2. **HTML-sivu (index.html)** – näyttää kaavion selaimessa.

JavaScript hakee lämpötilamittaukset ThingSpeak-kanavasta (`field1`) ja muuntaa datan Google Charts -yhteensopivaan muotoon.  
Tiedot piirretään kaavioon otsikolla **"Joulusaunan lämmitys mökillä"**, jossa x-akselilla on mittausaika ja y-akselilla lämpötila.  
Kaavio näkyy HTML-sivulla elementissä `curve_chart`.  
Jos ThingSpeak-data sisältää tyhjiä arvoja, ne ohitetaan, jotta kaavio piirtyy oikein.
