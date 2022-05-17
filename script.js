$(document).ready(function () {
    $('.titleTextMain').hide();
    $(".top").slideUp(-4);
    $(".titleTextMain").click(function (e) { 
        e.preventDefault();
        $(".top").slideDown(2000);
        setTimeout(() => {
            
            $(".titleTextMain").css("color", "#9b379f");
            $(".glow").css("text-shadow", " #56005a 10px 20px 45px");
        }, 1000);
    });

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
