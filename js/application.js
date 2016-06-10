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

  function navigate(direction, that, event) {

    event.preventDefault();
    event.stopPropagation();
    
    // find current grid
    var $currentGirdItem  = that.closest('.image-gird__item'),
        $nextGirdItem = '';

    if (direction == "next") {

      // find next grid
      $nextGirdItem = $currentGirdItem.next('.image-gird__item');

    } else if (direction == "prev") {

      // find prev grid
      $nextGirdItem = $currentGirdItem.prev('.image-gird__item');

    }

    // close current grid item
    $currentGirdItem.removeClass('is-expanded').addClass('is-collapse');

    // open next grid item
    $nextGirdItem.removeClass('is-collapse').addClass('is-expanded');

    // bind big image to next grid
    var $nextBigImg  = $nextGirdItem.find('a').data('big');
    $('.big-img').attr('src', $nextBigImg);

  }

  // Next Image
  $('.gal-next').on('click', function(event) {
    navigate("next", $(this), event);
  });

 // Prev Image
  $('.gal-prev').on('click', function(event) {
     navigate("prev", $(this), event);
  });

// Next previous using left/right arrow key
 $(document).on('keyup', function (event) {

    
    if (event.keyCode == 37) { 
 
        // Find and expand content previous button
        $currentEl = $('.image-gird__item.is-expanded').find('.gal-prev');

        //call navigate function for previous section
        navigate("prev", $currentEl, event);

    } else if (event.keyCode == 39) {

        // Find and expand content next button
        $currentEl = $('.image-gird__item.is-expanded').find('.gal-next');

        //call navigate function for next section        
        navigate("next", $currentEl, event);

    }

});
 
})(jQuery);
