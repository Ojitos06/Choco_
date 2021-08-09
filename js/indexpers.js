

const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded',(e)=>{
    setTimeout(()=> {
        splash.classList.add('display-none');
    },2000);
})



const iconoMenu = document.querySelector('#icono-menu'),
menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {
menu.classList.toggle('active');
document.body.classList.toggle('opacity');

const rutaActual = e.target.getAttribute('src');

if(rutaActual == 'imagenes/lineas.png'){
    e.target.setAttribute('src','imagenes/lineas2.png');
}else{
    e.target.setAttribute('src','imagenes/lineas.png');
}

});  






// Inspired by: https://dribbble.com/shots/3545421-017-Email-receipt

function $(e) { return document.querySelector(e); }

var next = $('.next');
var prev = $('.prev');
var index = 0;

var randomText = [
  {
    title: "Edier",
    desc: "Es un niño optimista, honesto, confiable, siempre trata de generar bienestar a los demás, es alegre, muy cariñoso tanto en su <br>entorno familiar como con sus amistades, le tiene miedo al cambio y no le gusta salir de su zona de confort. <br><br>- Nombre: Edier José Mena Palacios. <br>- Municipio: Riosucio. <br>- Fecha de nacimiento: 22 Agosto 2005. <br>- Edad: 14 años. <br>- Etnia: Afrodescendiente Embera. <br>- Tipo de reclutamiento: Forzado. "
  },
  {
    title: "Jhohan",
    desc: "Siempre le gusta ayudar y proteger a los demás, su papá también fue líder de la comunidad, en todo momento quiere <br>el bien común. <br><br>- Nombre: Jhohan Camilo Mena <br>- Parentesco: Papá de Edier <br>-  Fecha de nacimiento: 2 de febrero 1980 Atrato <br>- Edad: 40 años <br>- Etnia: Afrodescendiente Embera" 
  },
  {
    title: "Madre",
    desc: "Es una mujer que siempre busca la tranquilidad, felicidad y armonía en su entorno, le gusta estar en su zona de confort, <br>tiene mucha fé y es positiva, su debilidad es ser castigada o reprendida por hacer algo malo y que pierda lo que más quiere. <br><br>- Nombre: Gloria Carmen Palacios <br>- Parentesco: Mamá de Edier <br>- Fecha de nacimiento: 27 septiembre 1982 <br>- Edad: 38 años <br>- Etnia: Afrodescendiente Embera"
  },
  {
    title: "ERM",
    desc: "Es un grupo ilegal que siempre ha estado bajo el mando de Efrain alias 'El Búho'. <br><br>- Siglas: Ejercito Reclutador de Menores <br>- Jefe al mando: Cristian Efrain Gonzáles <br>- Situación actual: Activo <br>- Número total de personas: 10.000 personas a total disposición <br>- Ubicación: Chocó...en una selva de Riosucio (Atrato) <br><br> Actualmente no hay más información ni imagenes por precaución..." 
  } 
];



$('.content__title').innerHTML = randomText[0].title;
$('.content__desc').innerHTML = randomText[0].desc;

next.addEventListener('click', function() {
  if (index >= 0 && index <= 2) {
    toggleView();
    setTimeout(function() {
      $('.content__title').innerHTML = randomText[index].title;
      $('.content__desc').innerHTML = randomText[index].desc;      
    }, 500)
    $('main').classList.remove('view'+index+'--active');
    $('main').classList.add('view'+(index + 1)+'--active');
    index++;
  }
}, false);

prev.addEventListener('click', function() {
  if (index > 0 && index <= 3) {
    toggleView();
    setTimeout(function() {
      $('.content__title').innerHTML = randomText[index].title;
      $('.content__desc').innerHTML = randomText[index].desc;      
    }, 500)
    $('main').classList.remove('view'+(index)+'--active');
    $('main').classList.add('view'+(index - 1)+'--active');
    index--;
  }
}, false)

function toggleView() {
    $('main').classList.add('fade-out');
    setTimeout(function() {
      $('main').classList.remove('fade-out');
    }, 500)
}