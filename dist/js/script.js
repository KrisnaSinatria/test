 
 
 
 //swiper bangsat
 const swiper = new Swiper('.mySwiper',{
   
   grabCursor: true,
   centeredSlides: true,
   slidesPerView: "1",
   spaceBetween: 20,
   initialSlide: 0,
   coverflowEffect: {
     rotate: 10,
     stretch: 100,
     depth: 100,
     modifier: 1,
     slideShadows: true,
   },
   pagination: {
     el: ".swiper-pagination",
     clickable:true
    
   },
   breakpoints:{
     768:{
       slidesPerView: 2,
       centeredSlides:false,
       spaceBetween:30

     },
     1163:{
       slidesPerView: 3,
       centeredSlides:false,
       spaceBetween:30

     },
     
   }
 
 });
 
 const swipers = new Swiper(".mySwipers", {
  grabCursor:true,
  slidesPerView: 1,
  spaceBetween: 20,
  freeMode: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },

  breakpoints:{
    440:{
      slidesPerView:1.5,
    },

    768:{
      slidesPerView: 2,
      spaceBetween: 30,
      centeredSlides:false,
    },
    1024:{
      slidesPerView: 3,
      spaceBetween: 30,
      grabCursor:false,
    }
  }
});







// Navbar Fixed
window.onscroll = function(){
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  
  if (window.pageYOffset > fixedNav){
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
}
  
  // Hamburger
  const hamburger = document.querySelector('#hamburger');
  const navMenu = document.querySelector('#nav-menu');
  
  hamburger.addEventListener('click', function () {
    navMenu.classList.toggle('hidden');
  });
  
 
  // Klik di luar hamburger
  window.addEventListener('click', function (e) { 
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.add('hidden');
    }
    
  });

  //menu
  function showFoodMenu() {
    document.getElementById('menu-food').classList.remove('hidden');
    document.getElementById('menu-drink').classList.add('hidden');

   
    document.getElementById('show-food').classList.add('text-primary');
    document.getElementById('show-drink').classList.remove('text-primary');
  }

  
  function showDrinkMenu() {
    document.getElementById('menu-food').classList.add('hidden');
    document.getElementById('menu-drink').classList.remove('hidden');

    document.getElementById('show-food').classList.remove('text-primary');
    document.getElementById('show-drink').classList.add('text-primary');
  }

  
  showFoodMenu();
  document.getElementById('show-food').addEventListener('click', showFoodMenu);
  document.getElementById('show-drink').addEventListener('click', showDrinkMenu);
 