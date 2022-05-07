$(document).ready(function () {
    $('.titleTextMain').hide();

    $('.titleTextSub').click(function () {
        $('.titleTextMain').slideDown().fadeIn("slow");
        $(".titleTextSub").slideUp("slow");

    });

    $('.letter').hover(function () {
        $(this).addClass('glow');},
        function () {$(this).removeClass('glow')

    });

    $(".titleTextSub").hover(function () {
        $(this).text("the cuter they are!");},
        function () {$(this).text("the better they dress");
        
    });

});
