$(function () {

  const win_w = $(window).width();







  $('.msg_list>li>span').on('click', function (e) {
    e.preventDefault();

    var i = $(this).parent().index();
    $('.pic_list>li,.msg_list>li').removeClass('active');
    $('.tab_box').fadeOut();
    $(this).next('.tab_box').fadeIn();
    $(this).find('a').addClass('on');
    $(this).parent().siblings().find('a').removeClass('on');

    $('.pic_list>li').fadeOut().eq(i).fadeIn();

  });


  // 비주얼 - 슬라이드 
  let slide_i = 0;
  let slide_cnt = $('#visual > .slide').length;

  visual_slide(); // 슬라이드 함수 호출

  // 슬라이드 하는 함수 정의
  function visual_slide() {

    setInterval(function () {
      slide_i = (slide_i + 1) % slide_cnt;
      $('#visual > .slide').fadeOut(700).eq(slide_i).fadeIn(700);
    }, 3000);
  }


  // gnb 이벤트

  $('.total_menu').on('mouseenter', function () {

    $(this).children('.category').stop().show();
    $('.category_icon').show();


  });

  $('.total_menu').on('mouseleave', function () {
    $(this).children('.category').stop().hide();
    $('.category').removeClass('on');
    $('.category_icon').hide();

  });

  $('.category>li').on('mouseenter', function () {
    let  this_icon_class = $(this).find('i').attr('class');

    $('.category').addClass('on');
    $('.category_icon').find('i').removeAttr('class').addClass(this_icon_class);

    $('.sub_category').hide();
    $(this).children('.sub_category').show();


  });




  $('.category > li').on('click', function () {


    $('.sub_category').slideUp();;
    $(this).children('.sub_category').slideToggle();


  });





  var mySwiper = new Swiper('#today .swiper-container', {
    slidesPerView: 4,
    spaceBetween: 25,
    slidesPerGroup: 4,

    pagination: {
      el: '#today .swiper-pagination',
    },

    navigation: {
      nextEl: '#today .swiper-button-next',
      prevEl: '#today .swiper-button-prev',
    },
    // 모바일에서 값
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 15,

    // 반응형 - 수치마다 바뀔값 입력
    breakpoints: {
      480: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      640: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      980: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    }

  });

  let $grid = $('.list').isotope({
    itemSelector: '.list>li',
    layoutMode: 'fitRows',
  });


  $('.btn_set>li').on('click', function () {

    $(this).siblings().removeClass('on');
    $(this).addClass('on');
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
      filter: filterValue
    });
  });

  var mySwiper = new Swiper('#sale .swiper-container', {
    slidesPerView: 4,
    spaceBetween: 25,
    slidesPerGroup: 4,

    pagination: {
      el: '#sale .swiper-pagination',
    },

    navigation: {
      nextEl: '#sale .swiper-button-next',
      prevEl: '#sale .swiper-button-prev',
    },
    // 모바일에서 값
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 15,

    // 반응형 - 수치마다 바뀔값 입력
    breakpoints: {
      480: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      640: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      980: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    }
  });



});