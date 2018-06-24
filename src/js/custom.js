var containerEl = document.querySelector('#container');
            var selectFilter = document.querySelector('.select-filter');
            var selectSort = document.querySelector('.select-sort');
            var mixer = mixitup(containerEl);
            selectFilter.addEventListener('change', function() {
                var selector = selectFilter.value;
                mixer.filter(selector);
            });
            selectSort.addEventListener('change', function() {
                var order = selectSort.value;
                mixer.sort(order);
            });
