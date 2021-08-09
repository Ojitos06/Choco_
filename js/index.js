

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
        e.target.setAttribute('src','imagenes/lineas2.png');
    }

})





$('.slide-nav').on('click', function(e) {
  e.preventDefault();
  // get current slide
  var current = $('.flex--active').data('slide'),
    // get button data-slide
    next = $(this).data('slide');

  $('.slide-nav').removeClass('active');
  $(this).addClass('active');

  if (current === next) {
    return false;
  } else {
    $('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
    $('.flex--active').addClass('animate--end');
    setTimeout(function() {
      $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
      $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
    }, 800);
  }
});