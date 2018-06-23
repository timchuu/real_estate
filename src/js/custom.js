$(document).ready(function(){

      $(function () {

        var $grid = $('.grid'),
        filters ={};
        var selectFilter; //filter value from select


        $grid.isotope({
          itemSelector: '.p-type',
          filter: function () {

            var $this = $(this);
            var selectResult = selectFilter? $this.is(selectFilter):true;
            return selectResult;
          }
        });
          //filter select button
          $('.select').change(function () {

            var $this = $(this);

            //store filter value in object
            var group = $this.attr('data-filter-group');

            filters[group] =$this.find(':selected').attr('data-filter-value');

            //convert object to array
            var isoFliters =[];
            for (var prop in filters) {
              isoFilters.push( filters [prop] );
            }
            selectFilter = isoFilters.join('');
            console.log(selectFilter);
            $grid.isotope();
            return false;
          });


});


        //debounce so filtering doesnt happen every milli

        function debounce(fn, threshold) {
          var timeout;
          threshold = threshold || 100;
          return function debounce() {
            clearTimeout(timeout);
            var args = arguments;
            var _this = this;
            function delayed() {
              fn.apply(_this, args);
            }
            timeout = setTimeout(delayed, threshold);
          };
        }
});
