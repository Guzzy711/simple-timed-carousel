$(document)
    .ready(function () {
        console.log("Yay, JQuery is loaded!");


     function swapImages(){
      var $active = $('#productCarousel .active');
      console.log($active);
      var $next = ($('#productCarousel .active').next().length > 0) ? $('#productCarousel .active').next() : $('#productCarousel img:first');
      $active.fadeOut(function(){
      $active.removeClass('active').removeAttr('id');
      $next.fadeIn().addClass('active').attr('id','product');
      });
    }
        


      setInterval(function(){

        swapImages();
      }, 3000);


    });