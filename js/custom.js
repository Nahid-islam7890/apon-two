$(document).ready(
    function(){
        $(".preloder").delay(2000).fadeOut(2000);
    }
);




$(window).scroll(
    function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 100){
            $(".header-bg").addClass("bg");

        }else{
            $('.header-bg').removeClass("bg")
            }


        if(scrolling > 400){
            $('.scrol-top-buttom').fadeIn();
            
        }else{
            $('.scrol-top-buttom').fadeOut();
        }               
    } 
)

$(".scrol-top-buttom").click(
    function(){
        $("body,html").animate(
            {
                scrollTop: "0",

            },1500
        )
});