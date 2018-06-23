var linki = document.getElementsByTagName("a");
for (var i = 0; i <linki.length; i++) {
/*    console.log( linki[i].href );
    console.log( linki[i].className );*/
    if( i % 2 == 0) {
        //classList.add dodaje klasę
        //classList.remove usuwa klasę
        linki[i].classList.add( 'decor-link' );
    } else {
        linki[i].style.color = "red";
        linki[i].style.textDecoration = "none";
        linki[i].style.border = "2px dotted #000";
    }
}