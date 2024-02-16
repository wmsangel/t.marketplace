$(function () {
    if ($('#js-price-range').length) {
        var priceRange = document.getElementById('js-price-range');
        var priceRangeFrom = document.getElementById('js-price-range-from');
        var priceRangeTo = document.getElementById('js-price-range-to');
        var inputs = [priceRangeFrom, priceRangeTo];
        noUiSlider.create(priceRange, {
            start: [0, 5000],
            connect: true,
            tooltips: [false,
                wNumb({
                    decimals: 0,
                    suffix: '$'
                })
            ],
            format: wNumb({
                decimals: 0,
                suffix: '$'
            }),
            range: {
                'min': [0],
                'max': [9999]
            },
            step: 1
        });
        priceRange.noUiSlider.on('update', function (values, handle) {
            inputs[handle].value = values[handle];
        });
        inputs.forEach(function (input, handle) {

            input.addEventListener('change', function () {
                priceRange.noUiSlider.setHandle(handle, this.value);
            });

            input.addEventListener('focus', function (e) {
                e.preventDefault();
                $(this).val('')
            })

            input.addEventListener('keydown', function (e) {

                var values = priceRange.noUiSlider.get();
                var value = Number(values[handle]);

                var steps = priceRange.noUiSlider.steps();

                // [down, up]
                var step = steps[handle];

                var position;

                switch (e.which) {

                    case 13:
                        priceRange.noUiSlider.setHandle(handle, this.value);
                        break;

                    case 38:

                        // Get step to go increase slider value (up)
                        position = step[1];

                        // false = no step is set
                        if (position === false) {
                            position = 1;
                        }

                        // null = edge of slider
                        if (position !== null) {
                            priceRange.noUiSlider.setHandle(handle, value + position);
                        }

                        break;

                    case 40:

                        position = step[0];

                        if (position === false) {
                            position = 1;
                        }

                        if (position !== null) {
                            priceRange.noUiSlider.setHandle(handle, value - position);
                        }

                        break;
                }
            });
        });
    }
    if ($('#js-thc-range').length) {
        var thcRange = document.getElementById('js-thc-range');
        var thcRangeTo = document.getElementById('js-thc-range-to');
        noUiSlider.create(thcRange, {
            start: [60],
            connect: 'lower',
            tooltips: [
                wNumb({
                    decimals: 0,
                    suffix: '%'
                })
            ],
            format: wNumb({
                decimals: 0,
                suffix: '%'
            }),
            range: {
                'min': 0,
                'max': 100
            },
            step: 1
        });
        thcRange.noUiSlider.on('update', function (values, handle) {
            thcRangeTo.value = values[handle];
        });

        thcRangeTo.addEventListener('change', function () {
            thcRange.noUiSlider.set(this.value);
        });

        thcRangeTo.addEventListener('focus', function (e) {
            e.preventDefault();
            $(this).val('')
        })

        thcRangeTo.addEventListener('keydown', function (e) {

            var values = thcRange.noUiSlider.get();
            var value = Number(values);

            var steps = thcRange.noUiSlider.steps();

            // [down, up]
            var step = steps;

            var position;

            switch (e.which) {

                case 13:
                    thcRange.noUiSlider.setHandle(this.value);
                    break;

                case 38:

                    // Get step to go increase slider value (up)
                    position = step[1];

                    // false = no step is set
                    if (position === false) {
                        position = 1;
                    }

                    // null = edge of slider
                    if (position !== null) {
                        thcRange.noUiSlider.setHandle(value + position);
                    }

                    break;

                case 40:

                    position = step[0];

                    if (position === false) {
                        position = 1;
                    }

                    if (position !== null) {
                        thcRange.noUiSlider.setHandle(value - position);
                    }

                    break;
            }
        });
    }
    if ($('#js-cbd-range').length) {
        var cbdRange = document.getElementById('js-cbd-range');
        var cbdRangeTo = document.getElementById('js-cbd-range-to');
        noUiSlider.create(cbdRange, {
            start: [60],
            connect: 'lower',
            tooltips: [
                wNumb({
                    decimals: 0,
                    suffix: '%'
                })
            ],
            format: wNumb({
                decimals: 0,
                suffix: '%'
            }),
            range: {
                'min': 0,
                'max': 100
            },
            step: 1
        });
        cbdRange.noUiSlider.on('update', function (values, handle) {
            cbdRangeTo.value = values[handle];
        });

        cbdRangeTo.addEventListener('change', function () {
            cbdRange.noUiSlider.set(this.value);
        });

        cbdRangeTo.addEventListener('focus', function (e) {
            e.preventDefault();
            $(this).val('')
        })

        cbdRangeTo.addEventListener('keydown', function (e) {

            var values = cbdRange.noUiSlider.get();
            var value = Number(values);

            var steps = cbdRange.noUiSlider.steps();

            // [down, up]
            var step = steps;

            var position;

            switch (e.which) {

                case 13:
                    cbdRange.noUiSlider.setHandle(this.value);
                    break;

                case 38:

                    // Get step to go increase slider value (up)
                    position = step[1];

                    // false = no step is set
                    if (position === false) {
                        position = 1;
                    }

                    // null = edge of slider
                    if (position !== null) {
                        cbdRange.noUiSlider.setHandle(value + position);
                    }

                    break;

                case 40:

                    position = step[0];

                    if (position === false) {
                        position = 1;
                    }

                    if (position !== null) {
                        cbdRange.noUiSlider.setHandle(value - position);
                    }

                    break;
            }
        });
    }
});