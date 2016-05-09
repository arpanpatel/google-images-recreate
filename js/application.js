;(function($) {

 $control = '<a href="#" class="gal-next control">Next</a> ' +
            '<a href="#" class="gal-prev">Prev</a>';

 $expander =  '<div class="image-expand">'+
              '<img  class="big-img" src="" alt="">'+
              $control +
              '</div>';

  $('.box').after($expander);

  $('.image-gird__item').addClass('is-collapse');

  // Open Expand Area
  $('.box').on('click', function(){

     $cell = $(this).closest('.image-gird__item');

     var $bigImg  = $(this).data('big');
     $('.big-img').attr('src',$bigImg);

     if($cell.hasClass('is-expanded')) {

        $cell.removeClass('is-expanded').addClass('is-collapse');

     } else {

       $('.image-gird__item').removeClass('is-expanded').addClass('is-collapse');
       $cell.removeClass('is-collapse').addClass('is-expanded');

     }
  });

  // Next Image
  $('.gal-next').on('click', function(e) {

      e.preventDefault();
      e.stopPropagation();

      // find current grid
      var $currentGirdItem  = $(this).closest('.image-gird__item'),

      // find next grid
      $nextGirdItem = $currentGirdItem.next('.image-gird__item');

      // close current grid item
      $currentGirdItem.removeClass('is-expanded').addClass('is-collapse');

      // open next grid item
      $nextGirdItem.removeClass('is-collapse').addClass('is-expanded');

      // bind big image to next grid
      var $nextBigImg  = $nextGirdItem.find('a').data('big');
      $('.big-img').attr('src', $nextBigImg);

  });

 // Prev Image
  $('.gal-prev').on('click', function(e) {

      e.preventDefault();
      e.stopPropagation();

      // find current grid
      var $currentGirdItem  = $(this).closest('.image-gird__item'),

      // find next grid
      $nextGirdItem = $currentGirdItem.prev('.image-gird__item');

      // close current grid item
      $currentGirdItem.removeClass('is-expanded').addClass('is-collapse');

      // open next grid item
      $nextGirdItem.removeClass('is-collapse').addClass('is-expanded');

      // bind big image to next grid
      var $nextBigImg  = $nextGirdItem.find('a').data('big');
      $('.big-img').attr('src', $nextBigImg);

  });

})(jQuery);
