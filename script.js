$(document).ready(function () {
    let i = 0;
    setInterval(() => {
        
        console.log(i%20);
        let pike = document.getElementsByClassName("p" + (i%20))[0]
        pike.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        pike.style.top = (88 - Math.floor(Math.random()*3)) + "%";
        i++;
    }, 40);
    
    var comtd = 0;
    $('.titleTextMain').hide();
    $(".top").slideUp(0);
    $(".behind").hide();
    $(".behind2").hide();
    $(".behind3").hide();
    $(".titleTextMain").click(function (e) { 
        if (comtd == 3) {
            $(".behind3").show();
            // make behind2 explode 
            $(".behind2").toggle("fold", {horizFirst: true, size: 500}, 1000);
            comtd = 4;
            
        };
        
        if (comtd == 2) {
            $(".behind2").show(0);
            $(".behind").animate({width: 'toggle'}, 500);
            comtd = 3;
            
        };
        
        
        if (comtd == 1) {
            $(".top").slideToggle(500);
            comtd = 2;
            let i = 0;

        };

        if (comtd == 0) {
            e.preventDefault();
            $(".top").slideToggle(500);
            setTimeout(() => {
                
                $(".titleTextMain").css("color", "#9b379f");
                $(".letter").removeClass("glow");
            }, 250);
            setTimeout(() => {
                $(".behind").show();
            }, 500);

            comtd = 1;
        };
    });

    $('.titleTextSub').click(function () {
        $('.titleTextMain').slideDown().fadeIn("slow");
        $(".titleTextSub").slideUp("slow");

    });


    $(".titleTextSub").hover(function () {
        $(this).text("for fine professionals");},
        function () {$(this).text("the finest email adress");
        
    });


    

});
