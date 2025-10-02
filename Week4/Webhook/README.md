## Webhook
Ohjelma käynnistää Express-palvelimen porttiin 3000 ja vastaanottaa viestejä POST-pyynnön kautta osoitteessa **/notify**.  
Pyyntöön täytyy sisältyä kenttä `message`, joka sisältää lähetettävän tekstin.  
Kun viesti vastaanotetaan, ohjelma lähettää sen eteenpäin Discord-kanavalle määritetyn webhook-osoitteen kautta.  
Jos viesti puuttuu tai lähetys epäonnistuu, ohjelma palauttaa virheilmoituksen.
