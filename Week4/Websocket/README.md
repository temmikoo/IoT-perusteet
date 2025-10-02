## WebSocket
Ohjelmakokonaisuus koostuu kahdesta osasta:  
1. **WebSocket-palvelin (server.js)** – toteutettu Node.js:llä ja `ws`-kirjastolla.  
2. **HTML-asiakas (client.html)** – toimii selaimessa ja yhdistyy palvelimeen.

Kun palvelin on käynnissä portissa 8080 ja HTML-sivu avataan selaimessa, sivu muodostaa WebSocket-yhteyden palvelimeen osoitteessa `ws://localhost:8080`.

Käyttäjä voi kirjoittaa viestin tekstikenttään ja lähettää sen palvelimelle.  
Palvelin vastaanottaa viestin, tulostaa sen komentoriville ja lähettää sen takaisin selaimelle etuliitteellä **"Echo:"**.  
Selain näyttää vastauksen tekstikentän alapuolella.
