
## Server.js
Käynnistää Express-palvelimen porttiin 3000 ja käyttää SQLite-tietokantaa **TeemunDatabase.db**.  
Käynnistyessään ohjelma luo taulun **users**, jos sitä ei vielä ole.

**Päätepisteet:**
- **GET /api/users** – hakee kaikki käyttäjät tietokannasta ja palauttaa ne JSON-muodossa.  
- **POST /api/users** – lisää uuden käyttäjän tietokantaan pyynnön mukana annetun nimen ja sähköpostin perusteella.

Palvelin tulostaa käynnistyessään osoitteen komentoriville ja on käytettävissä osoitteessa `http://localhost:3000`.
