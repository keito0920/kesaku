class MobileMenu {
  constructor() {
      this.DOM = {};
      this.DOM.btn = document.querySelector('.mobile-menu__btn');
      this.DOM.cover = document.querySelector('.mobile-menu__cover');
      this.DOM.container = document.querySelector('#global-container');
      this.eventType = this._getEventType();
      this._addEvent();
  }

  _getEventType() {
      return window.ontouchstart ? 'touchstart' : 'click';
  }

  _toggle() {
      this.DOM.container.classList.toggle('menu-open');
  }

  _addEvent() {
      this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
      this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
  }
}

new MobileMenu();



document.addEventListener("DOMContentLoaded",function(){
    const hero4 = new HeroSlider2(".swiper-pe");
    const hero5 = new HeroSlider2(".swiper-list");
    const hero6 = new HeroSlider2(".swiper-tab");
    const hero7 = new HeroSlider2(".swiper-img");
    const hero8 = new HeroSlider2(".swiper-td");

    // hero4.start({delay:6000});
    hero5.start({delay:3000});
});
   
class HeroSlider2 {
    constructor(el){
      this.el = el;
      this.swiper = this._initSwiper();
    }
   
     _initSwiper(){
      return new Swiper(this.el, {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
         // Optional parameters
         // direction: 'vertical',
         loop: true,
         grabCursor:true,
         centeredSlides:true,
   
         navigation: {
           nextEl: '.swiper-button-next',
           prevEl: '.swiper-button-prev'
         }
      });
     }
   
     start(options = {}) {
       options = Object.assign({
         delay:3000,
         disableOnInteraction:false
       },options);
       this.swiper.params.autoplay = {
         delay:6000,
         disableOnInteraction:false
       }
       this.swiper.autoplay.start();
     }
     stop(){
       this.swiper.autoplay.stop();
     }
}



document.addEventListener("DOMContentLoaded",function(){
    const hero4 = new HeroSlider5(".swiper-im");
    // hero4.start({delay:6000});
    hero5.start({delay:3000});
});
   
class HeroSlider5 {
    constructor(el){
      this.el = el;
      this.swiper = this._initSwiper();
    }
   
     _initSwiper(){
      return new Swiper(this.el, {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
         // Optional parameters
         // direction: 'vertical',
         loop: true,
         grabCursor:true,
         centeredSlides:true,
         slidesPerView:2,
   
         navigation: {
           nextEl: '.swiper-button-next',
           prevEl: '.swiper-button-prev'
         }
      });
     }
   
     start(options = {}) {
       options = Object.assign({
         delay:3000,
         disableOnInteraction:false
       },options);
       this.swiper.params.autoplay = {
         delay:6000,
         disableOnInteraction:false
       }
       this.swiper.autoplay.start();
     }
     stop(){
       this.swiper.autoplay.stop();
     }
}






document.addEventListener("DOMContentLoaded",function(){
    const hero2 = new HeroSlider1(".swiper-main");
    // hero2.start({delay:6000});
});
   
class HeroSlider1 {
    constructor(el){
      this.el = el;
      this.swiper = this._initSwiper();
    }
   
     _initSwiper(){
      return new Swiper(this.el, {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },

         loop: true,
         grabCursor:true,
         centeredSlides:true,
      });
     }
   
     start(options = {}) {
       options = Object.assign({
         delay:3000,
         disableOnInteraction:false
       },options);
       this.swiper.params.autoplay = {
         delay:6000,
         disableOnInteraction:false
       }
       this.swiper.autoplay.start();
     }
     stop(){
       this.swiper.autoplay.stop();
     }
}



document.addEventListener("DOMContentLoaded",function(){
    const hero4 = new HeroSlider3(".swiper-last");

    // hero4.start({delay:6000});
});
   
class HeroSlider3 {
    constructor(el){
      this.el = el;
      this.swiper = this._initSwiper();
    }
   
     _initSwiper(){
      return new Swiper(this.el, {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
         loop: true,
         grabCursor:true,
         slidesPerView: 1,
         slidesPerGroup: 1,
         spaceBetween: 10,
         centeredSlides:true,
      });
     }
   
     start(options = {}) {
       options = Object.assign({
         delay:3000,
         disableOnInteraction:false
       },options);
       this.swiper.params.autoplay = {
         delay:6000,
         disableOnInteraction:false
       }
       this.swiper.autoplay.start();
     }
     stop(){
       this.swiper.autoplay.stop();
     }
}


document.addEventListener("DOMContentLoaded",function(){
  const hero7 = new HeroSlider4(".swiper-blue");

  // hero7.start({delay:3000});
});
 
class HeroSlider4 {
  constructor(el){
    this.el = el;
    this.swiper = this._initSwiper();
  }
 
   _initSwiper(){
    return new Swiper(this.el, {
     
       // Optional parameters
       // direction: 'vertical',
       loop: true,
       effect:"coverflow",
       grabCursor:true,
       centeredSlides:true,
       slidesPerView:1,
 
       navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev'
       }
    });
   }
 
   start(options = {}) {
     options = Object.assign({
       delay:3000,
       disableOnInteraction:false
     },options);
     this.swiper.params.autoplay = {
       delay:6000,
       disableOnInteraction:false
     }
     this.swiper.autoplay.start();
   }
   stop(){
     this.swiper.autoplay.stop();
   }
}

















  
//   </body>
// </html>
