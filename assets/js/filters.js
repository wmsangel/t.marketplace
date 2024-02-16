$(function (){
    const body = $('body');
    body.on('click', '.js-filter-btn', function (e) {
        e.preventDefault();
        $(this).toggleClass('is-opened');
        $('.js-filter-dropdown').toggleClass('is-opened');
    })
    body.on('click', '.js-sidebar-filter-checkbox', function (e) {
        e.preventDefault();
        let input = $(this).find('input');
        let inputText = input.val();
        let inputName = input.attr('name');

        if (input.is(':checked')) {
            input.prop('checked', false);
            $(this).removeClass('is-checked');
            $('.js-result-sidebar-item[data-name="'+inputName+'"][data-value="'+inputText+'"]').remove();
        } else {
            input.prop('checked', true);
            $(this).addClass('is-checked')
            let resultHTML = $('<div class="js-result-sidebar-item result-sidebar-item" data-name="'+inputName+'" data-value="'+inputText+'">'+inputText+' <button class="js-result-sidebar-item-remove result-sidebar-item__remove"></button></div>')
            resultHTML.appendTo('.js-results-filter')
        }
    })
    body.on('click', '.js-result-sidebar-item', function (e) {
        let inputText = $(this).data('value');
        let inputName = $(this).data('name');
        console.log(inputText)
        console.log(inputName)
        $('input[name="'+inputName+'"][value="'+inputText+'"]').parent('.js-sidebar-filter-checkbox').trigger('click');
    })
    body.on('click', '.js-sidebar-filter-block-btn', function (e) {
        e.preventDefault();
        $(this).toggleClass('is-opened');
        $(this).next('.js-sidebar-filter-block-list').toggleClass('is-opened').slideToggle();
    })
})