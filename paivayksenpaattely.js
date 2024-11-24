const paivamaara = new Date();
paivamaara.toLocaleString('en-US', { timeZone: 'Europe/Helsinki' });
const vuosi = paivamaara.getFullYear();
const kuukausi = String(paivamaara.getMonth() + 1).padStart(2, '0'); // Month is 0-based
const paiva = String(paivamaara.getDate()).padStart(2, '0');
const paivays = vuosi + "-" + kuukausi + "-" + paiva;