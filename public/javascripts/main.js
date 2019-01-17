//function to toggle the visibility of the underscores
(function($){
  $.fn.visible = function() {
    return this.css('visibility', 'visible');
  };

  $.fn.invisible = function() {
    return this.css('visibility', 'hidden');
  };

  $.fn.visibilityToggle = function() {
    return this.css('visibility', function(i, visibility) {
      return (visibility == 'visible') ? 'hidden' : 'visible';
    });
  };

  var toggle_visibility = setInterval(function(){
    $("#underscore").visibilityToggle();
  }, 500);

})(jQuery);

$(".nav .nav-link").on("click", function(){
  console.log('setting active');
   $(".nav-item").find(".active").removeClass("active");
   $(this).addClass("active");
});

$('.arrow_expander').on('click', function() {
  if ($(this).hasClass('collapsed_arrow')) {
    $(this).removeClass('collapsed_arrow');
    $(this).addClass('expanded_arrow');
  } else {
    $(this).removeClass('expanded_arrow');
    $(this).addClass('collapsed_arrow');
  }
});

$('.title_expander').on('click', function() {
  if($(this).hasClass('title_collapsed')) {
    $(this).removeClass('title_collapsed');
    $(this).addClass('title_expanded');
  } else {
    $(this).removeClass('title_expanded');
    $(this).addClass('title_collapsed');
  }
});
