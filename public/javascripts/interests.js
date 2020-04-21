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
