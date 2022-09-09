$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="btn prevBtn"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="btn nextBtn"><i class="fa fa-angle-right"></i></button>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});



$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true
});


$('.fieldBtn').click(function () {
    $('.fieldBtn').removeClass('active');
    $(this).addClass('active');
    $('.btn-field').hide(100)
})

$('.btn1').click(function () {
    $('.btn1Field').show(100)
})
$('.btn2').click(function () {
    $('.btn2Field').show(100)
})
$('.btn3').click(function () {
    $('.btn3Field').show(100)
})
$('.btn4').click(function () {
    $('.btn4Field').show(100)
})
$('.btn5').click(function () {
    $('.btn5Field').show(100)
})
$('.btn6').click(function () {
    $('.btn6Field').show(100)
})