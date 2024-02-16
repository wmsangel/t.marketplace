$(function () {
    $('.js-nose-radio')
        .on('mouseenter', function (e) {
            let radioID = $(this).data('radio-id');
            $('.js-nose-radio-input#'+radioID).addClass('is-hover')
        })
        .on('mouseout', function (e) {
            let radioID = $(this).data('radio-id');
            $('.js-nose-radio-input#'+radioID).removeClass('is-hover')
        })
})