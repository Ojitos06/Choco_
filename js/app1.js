

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
