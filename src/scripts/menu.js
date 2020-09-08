$(document).ready(function(){
   $('.header__burger').click(function(event){
     $('.menu').toggleClass('menu-active');
     $('.header__burger').toggleClass('header__burger_active');
   });
});