$(document).ready(function () {
    $('.slider_banner').owlCarousel({
        items: 1,
        nav: true,
        navText: [$('.prev'), $('.next')],
    });

    /* Кнопка выбрать все */

    $(".choose__all").on("click", function(){
        // $(this).siblings(".selects__inner")
        $(this).siblings(".selects__inner").children(".choose__item").children("input[type=checkbox]").each(function() { 
            this.checked = true;
        });
    });

    /* Кнопки переключения физ лица и юр лица */ 

    $(".fizface").on("click", function(){
        $(".reg__face--tab").fadeOut(0);
        $(".fiz").fadeIn(0);
    });

    $(".yurface").on("click", function(){
        $(".reg__face--tab").fadeOut(0);
        $(".yur").fadeIn(0);
    });

    /* Кнопка сброса */

    $(".reset__btn").on("click", function(){
        $(this).parents(".reset__btns").siblings(".selection__content").children(".select__box").children(".selects__inner").children(".choose__item").children("input[type=checkbox]").each(function() { 
            this.checked = false;
        });
    });

    /* Переключение технического каталога */

    var catalogLink = $(".tex-catalog__views--link");

    catalogLink.on("click", function(){

        $(".tex-catalog__views--link").removeClass("active__view");
        $(this).addClass("active__view");

        $(".tex__inner").fadeOut(0);
        $(".tex__title").fadeOut(0);

        if($(this).hasClass("cable__link")){
            $(".cable__inner").fadeIn(0);
            $(".cable__title").fadeIn(0);
        }
        else if($(this).hasClass("itk__link")){
            $(".iek-catalog__inner").fadeIn(0);
            $(".iek__title").fadeIn(0);
        }
        else if($(this).hasClass("tdm__link")){
            $(".itk-catalog__inner").fadeIn(0);
            $(".itk__title").fadeIn(0);
        }
        else if($(this).hasClass("iek__link")){
            $(".tex-catalog__inner").fadeIn(0);
            $(".cat__title").fadeIn(0);
        }
        else if($(this).hasClass("all__link")){
            $(".tex__inner").fadeIn(0);
            $(".tex__title").fadeIn(0);
        }
    });

    /* Конец переключателей технического каталога */ 

    let brands = $('.brands_slider');
    let popular = $('.popular_slider');
    let newprod = $('.new_slider');
    let stockslider = $('.stock_slider');
    brands.owlCarousel({
        items: 4,
        nav: false,
        dots: false
    });
    popular.owlCarousel({
        items: 4,
        nav: false,
        dots: false
    });
    newprod.owlCarousel({
        items: 4,
        nav: false,
        dots: false,
    });
    stockslider.owlCarousel({
        items: 4,
        nav: false,
        dots: false,
    });
    $('.brands_navs .next_arr').click(function () {
        brands.trigger('next.owl.carousel');
    });
    $('.brands_navs .prev_arr').click(function () {
        brands.trigger('prev.owl.carousel');
    });
    $('.popular .next_arr').click(function () {
        popular.trigger('next.owl.carousel');
    });
    $('.popular .prev_arr').click(function () {
        popular.trigger('prev.owl.carousel');
    });
    $('.new .next_arr').click(function () {
        newprod.trigger('next.owl.carousel');
    });
    $('.new .prev_arr').click(function () {
        newprod.trigger('prev.owl.carousel');
    });
    $('.stock .next_arr').click(function () {
        stockslider.trigger('next.owl.carousel');
    });
    $('.stock .prev_arr').click(function () {
        stockslider.trigger('prev.owl.carousel');
    });
    $('<div class="quantity-nav"><div class="quantity-button quantity-down">-</div><div class="quantity-button quantity-up">+</div></div>').insertAfter('.quantity input');
    $('.quantity').each(function () {
        var spinner = jQuery(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

    });
    $('#num').niceSelect();

    // $('.views').click(function (e) {
    //     e.preventDefault();
    //     if (!$(this).is('.active')) {
    //         $('.views').removeClass('active');
    //         $(this).addClass('active');
    //     }
    // });
    
    /*      RANGE      */
    
    $('.upper').on('input', setFill);
	$('.lower').on('input', setFill);

	var max = $('.upper').attr('max');
	var min = $('.lower').attr('min');

	function setFill(evt) {
		var valUpper = $('.upper').val();
		var valLower = $('.lower').val();
		if (parseFloat(valLower) > parseFloat(valUpper)) {
			var trade = valLower;
			valLower = valUpper;
			valUpper = trade;
		}
		
		var width = valUpper * 100 / max;
		var left = valLower * 100 / max;
		$('.fill').css('left', 'calc(' + left + '%)');
		$('.fill').css('width', width - left + '%');
	}
    
    setFill();
});