

const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded',(e)=>{
    setTimeout(()=> {
        splash.classList.add('display-none');
    },2000);
})







const iconoMenu = document.querySelector('#icono-menu'),
menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {
menu.classList.toggle('menulineas');
document.body.classList.toggle('opacity');

const rutaActual = e.target.getAttribute('src');

if(rutaActual == 'imagenes/lineas2.png'){
    e.target.setAttribute('src','imagenes/lineas.png');
}else{
    e.target.setAttribute('src','imagenes/lineas2.png');
}

});  


var app = new Vue({
    el: '#app',
    data: {
        currentSlide: 0,
        isPreviousSlide: false,
        isFirstLoad: true,
        slides: [
            {
                headlineFirstLine: "Yennifer",
                headlineSecondLine: "Salazar",
                sublineFirstLine: "Productora",
                sublineSecondLine: "Multimedia",
                bgImg: "imagenes/yenn.jpg",
                rectImg: "https://s27.postimg.org/rgouhim83/slide_rect0.jpg",
                
            },
            {
                headlineFirstLine: "Juan",
                headlineSecondLine: "Cortés",
                sublineFirstLine: "Productor",
                sublineSecondLine: "Multimedia",
                bgImg: "imagenes/juan.jpg",
                
            },
            {
                headlineFirstLine: "Rocío",
                headlineSecondLine: "Bahamon",
                sublineFirstLine: "Productora",
                sublineSecondLine: "Multimedia",
                bgImg: "imagenes/rocio.jpg",
                rectImg: "https://s28.postimg.org/a2i6ateul/slide_rect2.jpg"
            },
            {
                headlineFirstLine: "Sebastian",
                headlineSecondLine: "González",
                sublineFirstLine: "Productor",
                sublineSecondLine: "Multimedia",
                bgImg: "imagenes/sebas.jpg",
                rectImg: "https://s28.postimg.org/a2i6ateul/slide_rect2.jpg"
            }
        ]
    },
  mounted: function () {
    var productRotatorSlide = document.getElementById("app");
        var startX = 0;
        var endX = 0;

        productRotatorSlide.addEventListener("touchstart", (event) => startX = event.touches[0].pageX);

        productRotatorSlide.addEventListener("touchmove", (event) => endX = event.touches[0].pageX);

        productRotatorSlide.addEventListener("touchend", function(event) {
            var threshold = startX - endX;

            if (threshold < 150 && 0 < this.currentSlide) {
                this.currentSlide--;
            }
            if (threshold > -150 && this.currentSlide < this.slides.length - 1) {
                this.currentSlide++;
            }
        }.bind(this));
  },
    methods: {
        updateSlide(index) {
            index < this.currentSlide ? this.isPreviousSlide = true : this.isPreviousSlide = false;
            this.currentSlide = index;
            this.isFirstLoad = false;
        }
    }
})


