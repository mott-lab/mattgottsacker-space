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
  if ($(this).find(".svg").hasClass('collapsed_arrow')) {
    $(this).find(".svg").removeClass('collapsed_arrow');
    $(this).find(".svg").addClass('expanded_arrow');
  } else {
    $(this).find(".svg").removeClass('expanded_arrow');
    $(this).find(".svg").addClass('collapsed_arrow');
  }
});

$('.arrow_expander').on('mouseenter', 
  function() {
    $(this).addClass("contentCardHighlight");
    $(this).find("path.chevronSelect").addClass('chevronSelected');
    $(this).find(".subtitle").addClass('subtitleHighlight');
  }
).on('mouseleave',
  function() {
    $(this).removeClass("contentCardHighlight");
    $(this).find("path.chevronSelect").removeClass('chevronSelected');
    $(this).find(".subtitle").removeClass('subtitleHighlight');
  }
);

$('.title_expander').on('click', function() {
  if($(this).hasClass('title_collapsed')) {
    $(this).removeClass('title_collapsed');
    $(this).addClass('title_expanded');
  } else {
    $(this).removeClass('title_expanded');
    $(this).addClass('title_collapsed');
  }
});

// Replace all img tags with svg elements with inline svg elements. This allows
// CSS to manipulate the colors of the svg elements.
// First part from Bloggerschmidt:
// https://gist.github.com/Bloggerschmidt/61beeca2cce94a70c9df
$(function() {
  $('img.svg').each(function(){
    var $img = $(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    $.get(imgURL, function(data) {
      // Get the SVG tag, ignore the rest
      var $svg = $(data).find('svg');

      // Add replaced image's ID to the new SVG
      if(typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if(typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass+' replaced-svg collapsed_arrow');
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');

      // Replace image with new SVG
      $img.replaceWith($svg);

      // Interact with new SVG's CSS on hover
      $svg.hover(
        function(){
          $(this).children().first().addClass('chevronSelected');
        },
        function(){
          $(this).children().first().removeClass('chevronSelected');
        }
      );

    }, 'xml');

  });
});

$('.close').click(function(e) {
  $('.data-banner').fadeOut();
});