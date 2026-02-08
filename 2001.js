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

kuluvanpaivanaika =  'https://jyvaskyla.digitransit.fi/reitti/Linkkikeskus%2C%20Jyv%C3%A4skyl%C3%A4**LINKKI%3A1%3A%3A62.240841%2C25.747789/Asmalampi%202%2C%20Jyv%C3%A4skyl%C3%A4**LINKKI%3A207768%3A%3A62.250078%2C25.831805?setTime=true&time=' + aika[1];

document.getElementById('2001').src = kuluvanpaivanaika;
