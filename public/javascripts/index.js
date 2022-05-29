// Change profile picture when user hovers over it.
// var numHovers = 0;
// $('.profile-pic').on("mouseenter click", function(){
//   var hoverPic = 'images/profile-pic-b-' + (numHovers % 6) + '-1200.jpg'
//   $(this).attr('src', hoverPic);
//   numHovers++;
// });

var map = L.map('map').setView([0,0], 1);
L.tileLayer.provider('Esri.WorldImagery').addTo(map);
var marker = L.marker([28.538336, -81.379234]).addTo(map);

var currentPic = 'images/profile-pic-b-0-1200.jpg';
var picIdx = 0;
function nextPic() {
  picIdx++;
  picIdx %= 6;
  picSrc = 'images/profile-pic-b-' + picIdx + '-1200.jpg';
  $('.profile-pic').attr('src', picSrc);
}

var picSwitch = setInterval(nextPic, 2000);