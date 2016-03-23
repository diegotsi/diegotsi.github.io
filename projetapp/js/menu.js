
(function($) {          
    $(document).ready(function(){
        var tamanho_tela = $(window).height();                     
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > tamanho_tela -75) {
                $('#menu-bottom').removeClass("normal");
                $('#menu-bottom').addClass("topo")
            } else {
                $('#menu-bottom').removeClass("topo");
                $('#menu-bottom').addClass("normal")
            }
        });
    });
})(jQuery);

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});