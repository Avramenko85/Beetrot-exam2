'use strict';
// =====header slider====
$('.slider').slick({
    arrows: false,
    dots: true,
    vertical: true,
  verticalSwiping: true,
  autoplay: true,
  autoplaySpeed: 2500,
  speed: 1000,
    draggable:false,
    responsive: [{
         breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }]
});

// ===news slider=====
$('.news__slider').slick({
  infinite: true,
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
   responsive: [{
         breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }]
});

// ======header skroll=======

// document.querySelectorAll('a[href^="#"]').forEach(scroll => {
//   scroll.addEventListener('click', function (e) {
//     e.preventDefault();
//     document.querySelector(this.getAttribute("href")).scrollIntoView({
//       behavior: "smooth"
//     });
//   });
// });
$('.page-scroll').click(function () {
  let scrollName = $(this).attr('data-scroll'),
    scrollElem = $(scrollName),
    scrollTop = scrollElem.offset().top;
  
  $('html, body').animate({
    scrollTop: scrollTop
  }, 50);
});

// =====project show text============
$('button.project__btn').click(function () {
  $('p.show__text').toggle('slow', function () { });
  $('.position_img-trade').toggleClass('active-img-fir');
})



$('button.project__button').click(function () {
  $('p.show__second-text').toggle('slow', function () { });
  $('.position_img-commerce').toggleClass('active-img-sec');
})




$('button.gallery__btn').click(function () {
  $('.gallery__album-open').toggleClass('active');
})
  
// -----------scroll top-------

let scrollArrow = document.querySelector('.arrow__up');

window.onscroll = () => {
  if (window.scrollY > 700) {
    scrollArrow.classList.remove('show_arrow');
  } else if (window.scrollY < 700) {
    scrollArrow.classList.add('show_arrow');
  }

  scrollArrow.onclick = () => {
    window.scrollTo(0,0);
};
};


// =====валідація форми=======


  const form = document.getElementById('form');
  form.addEventListener('submit', sendForm);

  async function sendForm(e) {
    e.preventDefault();

    let error = formValidate(form);
 
  }

  function formValidate(form) {
    let error = 0;
    let formQwe = document.querySelectorAll('._req');

    for (let index = 0; index < formQwe.length; index++) {
      const input = formQwe[index];
      formRemoveError(input);

      if (input.classList.contains('_email')) {
        if (testMail(input)) {
          formAddError(input);
          error++;
        }
      } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
        formAddError(input);
        error++;
      } else {
        if (input.value === '') {
          formAddError(input);
          error++;
        }
      }
    }
  }
  function formAddError(input) {
    input.parentElement.classList.add('error');
    input.classList.add('error');
  }
  function formRemoveError(input) {
    input.parentElement.classList.remove('error');
    input.classList.remove('error');
  }
  function testMail(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  };


