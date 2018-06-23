var akcja = document.getElementById('klik_akcja');
akcja.onclick = function(e) {
    e.preventDefault();
    akcja.classList.add('decor-link');
}

var header = document.getElementById('main-header');
header.addEventListener('mousecenter', function(e){
    document.body.classList.toggle('move');
});

var header = document.getElementById('main-header');
header.addEventListener('mouseleave', function(e){
    document.body.classList.toggle('move');
});

document.getElementById('event_div').addEventListener('click', function(e){
    console.log("Kliknięty DIV");
});

document.getElementById('btn').addEventListener('click', function(e){
    e.stopPropagation();
    console.log("Kliknięty BUTTON");
});