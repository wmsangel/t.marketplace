$(function (){
    // Range block
    if ($('.js-noui').length) {
        $.getScript("assets/js/range.js", function () {});
    }

    // Nose block
    if ($('.js-nose-radio').length) {
        $.getScript("assets/js/nose.js", function () {});
    }

    // Filters block
    if ($('.js-filter-btn').length) {
        $.getScript("assets/js/filters.js", function () {});
    }
})