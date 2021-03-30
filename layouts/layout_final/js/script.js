$(document).ready(function (){
    
    // Страница Blog
    // фильтр на содержимое Blog
    $('#filter').on('click','a', function (e){
        let li = $('.blog_gallery li');
        li.each(function (index, elem){
            $(elem).css('display', 'block')
        })
        e.preventDefault()
        let id = e.currentTarget.id;
        li.each(function (index, elem){
            if(id === 'all'){
                $(elem).css('display', 'block')
            }
            else if(id !== elem.dataset.filter){
                $(elem).css('display', 'none')
            }
        })
    });

    //сохранение стиля для активного элемента filter в Blog
    $('#filter').on('click', 'a', function (e) {
        e.preventDefault();
        let id = e.currentTarget.id;
        let ali = $('.blog_filter-options a');
        ali.each(function (index, elem){
            if (id === elem.dataset.option){
               $(elem).addClass("selected");
            }
            else  $(elem).removeClass("selected"); 
        })    
    });

    //появление/скрытие фильтра для элементов blog-gallery
    $('#choice').click(function (){
        $(".blog_filter-options").slideToggle(600);
    });
    
    // Главная страница
    // header
    // фиксация меню
    var nav = $('.header');
 
	$(window).scroll(function () {
		if ($(this).scrollTop() > 40) {
			nav.addClass("header_fix-body");
		} else {
			nav.removeClass("header_fix-body");
		}
	});

    //бургер
    $(".header_burger").click(function (e) {
        $(".header_burger, .header_menu").toggleClass("active");
        $("body").toggleClass("lock"); //чтобы при открытом меню не скроллился экран 
    });

    //слайдер
    $(".reviews_slider").slick();

    //анимация полос и цифр в блоке Lessons
    var flag = 0; 
    $(document).scroll(function(){
        var finNum1 = 75;
        var finNum2 = 90;
        var finNum3 = 60; 
        var offset = $("#number75").offset().top;
        var scroll = $(window).scrollTop() + $(window).height();

        if (scroll >= offset && flag === 0 ) {
            animateNumber1(finNum1);
            animateNumber2(finNum2);
            animateNumber3(finNum3);

            $("#line75").animate({
                width: "75%",
            }, 1500)
            $("#line90").animate({
                width: "90%",
            }, 1500)
            $("#line60").animate({
                width: "60%",
            }, 1500)

            flag = 1;
        }
    });
    // не смогла продумать как вызвать значение конечной ширины полосы, 
    // чтобы не писать 3 разные функции:(
    function animateNumber1(num1) {  
        var i = 0;
        var timer = setInterval(function() {
            i += 1; 
            $("#number75").html(i);    
            if (i >= num1) { 
                clearInterval(timer);
            } 
        }, 20); 
    }
    function animateNumber2(num2) {  
        var i = 0;
        var timer = setInterval(function() {
            i += 1; 
            $("#number90").html(i);    
            if (i >= num2) { 
                clearInterval(timer);
            } 
        }, 16.7); 
    }
    function animateNumber3(num3) {  
        var i = 0;
        var timer = setInterval(function() {
            i += 1; 
            $("#number60").html(i);    
            if (i >= num3) { 
                clearInterval(timer);
            } 
        }, 25); 
    }

    //скрыть и показать в блоке Блог
    $('#showMore').click(function (e) {
        e.preventDefault();
        $(".blog_item-hidden").slideToggle(600, function(){
			if ($(this).is(':hidden')) {
				$('.blog_showMore').html('Показать еще');
			} else {
				$('.blog_showMore').html('Скрыть');
			}							
		});
		return false;
    });

    

})