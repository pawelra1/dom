//getElementById - nazwa id elementu bez #
var elementPoId = document.getElementById("par-first");
console.log(elementPoId);


/*

getElementsByClassName - nazwa klasy elementu bez .

do konkretnych elementów pobranej kolekcji dostajemy się za pomocą indeksów i nazwiasów kwadratowych jak w tablicach np. elementyPoKlasie[2]

*/

var elementyPoKlasie = document.getElementsByClassName("link");
console.log(elementyPoKlasie);
//dodanie [index] pokaże konkretny index
console.log(elementyPoKlasie[2]);

for( var i = 0; i< elementyPoKlasie.length; i++ ) {
    console.log( elementyPoKlasie[i] );
}

/*
etElementsByTagName - elementy o konkretnych tagach

do konkretnych elementów dostajemu się jak w tablicy np elementyPoTagu[0]
*/
var elementPoTagu = document.getElementsByTagName("a");
console.log(elementPoTagu);

/*
querySelector - pobiera pierwszy znaleziony elemet o danym selektorze

 ważne!!! jeśli wybieramy elementy po klasie albo id należy w wywołaniu użyć . albo #
 */

var qsElementPoId = document.querySelector("#par-first");
console.log(qsElementPoId);

/*querySelectorAll - jw pobiera tylko wszystkie elementy po wskazanym selektorze

tutaj można przejść po elementach za pomocą metody forEach
*/

var qsElementyPoKlasie = document.querySelectorAll(".superlink");
console.log(qsElementyPoKlasie);