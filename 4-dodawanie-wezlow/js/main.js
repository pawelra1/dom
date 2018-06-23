
var pierwszyDiv = document.getElementById("par-first");
console.log(pierwszyDiv);

//pobranie rodzica elementu parentElement
var rodzicPierwszegoDiva = pierwszyDiv.parentElement;
console.log( rodzicPierwszegoDiva );

//pobranie dzieci rodzica - wszystkie węzły elementu, w tym białe znaki pomiędzy elementami oraz komentarze
var dzieciSekcji = rodzicPierwszegoDiva.childNodes;
console.log(dzieciSekcji);

//pobranie konkretnego dziecka za pomocą indeksu jak w tablicach
console.log(dzieciSekcji[1]);


//children pobiera dzieci elementu tylko te, które są też elementem
var fajniejszeDzieciSekcji = rodzicPierwszegoDiva.children;
console.log(fajniejszeDzieciSekcji);

//firstElementChild pobiera pierwszy element dziecka
var pierwszeDzieckoSekcji = rodzicPierwszegoDiva.firstElementChild;
console.log(pierwszeDzieckoSekcji);

//lastElementChild pobiera ostatni element dziecka
var ostatnieDzieckoElementu = rodzicPierwszegoDiva.lastElementChild;
console.log(ostatnieDzieckoElementu);

//rodzeństwo
var link = document.querySelector("#par-first .link");
console.log(link);

//previousElementSibling pobiera poprzedni element z tego samego poziomu struktury
var rodzenstwoLink = link.previousElementSibling;
console.log(rodzenstwoLink);

var rodzenstwoLinkNastepny = link.nextElementSibling;
console.log(rodzenstwoLinkNastepny);

rodzicPierwszegoDiva.childNodes.forEach(function(element){
    if (element.nodeType == 1) {

    console.log( element.nodeType);
    }
})
