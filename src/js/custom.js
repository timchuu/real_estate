$('document').ready(function(){

           //check all jPList javascript options here
              jQuery.fn.jplist.settings = {
                //jquery ui range slider
                pricesSlider: function ($slider, $prev, $next) {
                  $slider.slider({
                    min:0,
                    max:3000,
                    range: true,
                    values: [0, 3000],
                    slide: function (event, ui) {
                      $prev.text('$' + ui.values[0]);
                      $next.text('$' + ui.values[1]);
                    }
                  });


                },
                  priesValues: function ($slider, $prev, $next) {

                    $prev.text('$' + $slider.slider('values', 0));
                    $next.text('$' + $slider.slider('values', 1));
                }
              };
              $('#demo').jplist({
                 itemsBox: '.list',
                 itemPath: '.list-item',
                 panelPath: '.jplist-panel',
                 effect: 'fade',
                 duration: 300,
                 fps: 24
              });
        });
