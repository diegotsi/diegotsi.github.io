
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

$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu-bottom a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-bottom ul li').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}