var paivattaulukonhaluttuaika = paivat.filter( function( elementti ) {
    return !!~elementti.indexOf( paivays );
} );

let aika = paivattaulukonhaluttuaika[0];

if (aika) {
    var elementti = document.getElementById("viikonlopputietoa");
    elementti.parentElement.removeChild(elementti);
} else {
    aika = 'X';
}

kuluvanpaivanaika =  'https://jyvaskyla.digitransit.fi/reitti/Asmalampi%202**LINKKI%3A207768%3A%3A62.2500778%2C25.8318052/Latostenmäki%20L%2C%20Jyväskylä**LINKKI%3A143561%3A%3A62.242005%2C25.844105/?setTime=true&time=' + aika[1];

document.getElementById('0825').src = kuluvanpaivanaika;
