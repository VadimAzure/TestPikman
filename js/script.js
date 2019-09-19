var menuToggle = document.querySelector('.js-toggle-mobile-menu')
var menuNav = document.querySelector('.js-menu-nav')
var menuToggle = document.querySelector('.header-toggle')
menuToggle.addEventListener('click', function (e) { 
  e.stopPropagation()
  menuNav.classList.toggle('is-mobile-open')
  if (menuNav.classList.contains('is-mobile-open')) {    
    menuToggle.classList.add('is-open')
  } else {
    menuToggle.classList.remove('is-open')
  }  
})
document.addEventListener('click', function (e) {
  if (menuNav.classList.contains('is-mobile-open')
      && menuToggle.classList.contains('is-open')
      && e.target !== menuToggle
     ) {
    menuToggle.classList.remove('is-open')
    menuNav.classList.remove('is-mobile-open')
  }
})




$('.flexBox2').owlCarousel({
    responsiveClass:true,
    margin: 20,
    nav : true,
    pagination : true,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        400:{
            items:3,
            nav:true
        },
        1000:{
            items:6,
            nav:true,
            loop:false
        }
    }
})

$('.pressCarousel').owlCarousel({
    responsiveClass:true,
    margin: 20,
    nav : true,
    pagination : true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        700:{
            items:2,
            nav:true
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
})
