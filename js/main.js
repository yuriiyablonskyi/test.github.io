$(function(){
    $('.burger, .menu__list a').click(function(){
        $('.menu__list').toggleClass('menu__list--active');
        $('.burger').toggleClass('burger--active');
    });
    var mixer = mixitup('.gallery__list');
    $(function () {
        $('.blog__inner').slick({
            dots: true,
            arrows: false
        });
    });
    
    $(".menu__list a").on("click", function (event) {
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 1500);
    });

    var nav = document.getElementById('header__top');

    window.onscroll = function () {

        if (window.pageYOffset > 100){

            nav.style.background = "#01353E";
            nav.style.boxShadow = "0px -400px 0px 400px #01353E";
        }
        else {
            nav.style.background = "transparent";
            nav.style.boxShadow = "none";
        }
    }
    $("html, body").animate({
        scrollTop: elementOffset - 1330
    }, 700);

});