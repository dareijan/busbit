# busbit7

Uuden linkin teko

pääskripti

indexMistaMinneHHMM.html
jonk frame id pitää olla uniikki ja johtaa samannimiseen uniikkiin js-tiedostoon esim
id="2000" ja 2000.js
2000_paivat  sisältää matkan urlille spesifisiä päivä-tunti-minuutti aikoja unix muodossa pitkälle tulevaisuuteen
esim. jos otan 1755.js linkin ja asetan silel 17:55 kellonajan unix timestapmpin  1770998100
https://jyvaskyla.digitransit.fi/reitti/Asmalampi%202%2C%20Jyv%C3%A4skyl%C3%A4**LINKKI%3A207768%3A%3A62.250078%2C25.831805/Vaajala%202%2C%20Jyv%C3%A4skyl%C3%A4**LINKKI%3A207822%3A%3A62.24897%2C25.868131?setTime=true&time=1770998100
näyttää se selaimessa kyselisestä aikalemasta alkaen ajetut vuorot

skripti HHMM.js pyrkii ottamaan valmiiksi generoiduista ajoista oikean ajan funktiossa paivattaulukonhaluttuaika

HHMM.js tiedostoissa on generoitu valmiita aikoja muttei kaikille päiville, esim. 1320 viikonloppujen ajat puuttuvat; se selviää kun debuggaat skriptejä, asettaen
breakpointin kaikkiin näihin aj ajaa tätä viikonloppuna
var paivattaulukonhaluttuaika = paivat.filter( function( elementti ) {
    return !!~elementti.indexOf( paivays );
} );
let aika = paivattaulukonhaluttuaika[0];

jolloin aika tulee undefined, 1320 aikaa ei lydy 2026-02-08 joka on sunnuntai. Aikaa jos on niin aikoja voisi generoida 1320.js-tiedostoon.