$(function (){
    // Range block
    if ($('.js-noui').length) {
        $.getScript("assets/js/_range.js", function () {});
    }

    // Nose block
    if ($('.js-nose-radio').length) {
        $.getScript("assets/js/_nose.js", function () {});
    }

    // Filters block
    if ($('.js-filter-btn').length) {
        $.getScript("assets/js/_filters.js", function () {});
    }
})