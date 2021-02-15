$(function(){
    
    var mySwiper = new Swiper('#related .swiper-container', {
          slidesPerView: 4,
          spaceBetween: 25,
          slidesPerGroup: 4,
  
          pagination: {
            el: '#related .swiper-pagination',
          },

          navigation: {
            nextEl: '#related .swiper-button-next',
            prevEl: '#related .swiper-button-prev',
          },

    });
    
    
});