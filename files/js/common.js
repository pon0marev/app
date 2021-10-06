;(function() {
    $(document).ready(() => {

        var slides = $("#slider__list .slider__item"),
            image = $('#slider__img'),
            desc = $('#slider__desc'),
            interval = 500;

        slides.bind('click', SliderWork);

        function SliderWork(e) {
            e.preventDefault();
            var link = $(this).children(0);

            slides.removeClass('slider__item_selected');
            $(this).addClass('slider__item_selected');

            image.attr('src', link.attr('href'));

            desc.children().eq(0).text('Здесь будет заголовок');
            desc.children().eq(1).text(link.text());
        }
    });
})();
