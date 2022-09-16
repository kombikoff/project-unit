$(document).ready(function(){
    // Находим блок со слайдами
    const owl = $('#clients-slider')

    // Запускаем карусель
    owl.owlCarousel({
        items: 1,
        loop: true
    });


    // Находим кастомные кнопки переключения слайдов
    const prev = $('#sliderPrev');
    const next = $('#sliderNext');


    // Клик на кнопку Назад и прокрутка карусели
    prev.click(function() {
        owl.trigger('prev.owl.carousel');
    });

    // Клик на кнопку Вперед и прокрутка карусели
    next.click(function() {
        owl.trigger('next.owl.carousel');
    });

});
