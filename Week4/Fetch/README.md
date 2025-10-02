## Fetch
Ohjelmakokonaisuus koostuu kahdesta osasta:  
1. **fetch_temperature.js** – hakee lämpötiladatan ThingSpeak-palvelusta.  
2. **HTML-sivu (index.html)** – näyttää haetun datan selaimessa.

JavaScript hakee lämpötilatiedot määritetystä ThingSpeak-kanavasta (`field1`) ja muuntaa ne taulukoksi, jossa näkyy mittausajankohta ja lämpötila.  
Saatu data muunnetaan JSON-muotoon ja tulostetaan HTML-sivulle otsikon alle elementtiin `output`.  
Jos datan lataus epäonnistuu, sivulla näytetään virheilmoitus **"Error loading data"**.
