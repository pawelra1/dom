var output = document.getElementById("output");

//tworzę nowy element
var newElement = document.createElement("p");

//dodanie id do p
newElement.setAttribute('id', 'newElement');

//dodanie klasy (class) do p
newElement.className = "nowaklasa";

//tworzę tekst do nowego elementu
var elementContent = document.createTextNode("Zawartość akapitu");

//wstawiam kontent do akapitu
newElement.appendChild( elementContent );

//wstawiam nowy element do miejsca docelowego
output.appendChild(newElement);



/* werja light*/

var nowyElement2 = document.createElement ("button");
nowyElement2.innerHTML = "Zawartość buttona";
output.appendChild(nowyElement2);

/* werja super light - on nadpisuje */
output.innerHTML = "<h4>Nagłówek H4</h4>"

//usuwanie elementów = pierwszy paragraw w div#par-first oraz div#output
var rodzic = document.getElementById('par-first');
var akapit = rodzic.firstElementChild;
rodzic.removeChild(akapit);

rodzic.removeChild( document.getElementById("output") );

//usunięcie 
rodzic.parentElement.removeChild(rodzic);

//usuwanie atrybutu
rodzic.removeAttribute("id");

//insertBefore
/*var rodzic2 = document.getElementById("par-second");
var newH6 = document.createElement("h6");
newH6.innerText = "Zawartość h6-stki";
var firstElem = rodzic2.firstElementChild;

rodzic2.insertBefore(newH6, firstElem);*/

var tytul = document.getElementsByTagName("h1")[0];

tytul.innerHTML = "NOOOOWAAA ZAWARTOŚŚŚĆĆ";

//pobiera zawartość (wnętrze) elementu wraz ze znacznikami HTML
console.log(tytul.innerHTML);

//pobiera zawartość wraz ze znacznikami HTML
console.log(tytul.outerHTML);