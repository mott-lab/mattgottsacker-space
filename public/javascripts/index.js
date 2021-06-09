// Change profile picture when user hovers over it.
var numHovers = 0;
$('.profile-pic').on("mouseenter click", function(){
  var hoverPic = 'images/profile-pic-b-' + (numHovers % 6) + '.jpg'
  $(this).attr('src', hoverPic);
  numHovers++;
});

var map = L.map('map').setView([0,0], 1);
L.tileLayer.provider('Esri.WorldImagery').addTo(map);
var marker = L.marker([28.538336, -81.379234]).addTo(map);