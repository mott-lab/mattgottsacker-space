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

var picSwitch = setInterval(nextPic, 5000);

var inVRdetails = document.querySelector("#inVRdetails");
var inVRimages = document.querySelectorAll(".inVRimages");

inVRdetails.addEventListener("toggle", function() {
  inVRimages.forEach((image) => {
    if (inVRdetails.hasAttribute("open")) {
      image.classList.remove("hideimage");
      image.classList.add("showimage");
    } else {
      image.classList.remove("showimage");
      image.classList.add("hideimage");
    }
  });
});

var interruptingVRdetails = document.querySelector("#interruptingVRdetails");
var interruptingVRimages = document.querySelectorAll(".interruptingVRimages");

interruptingVRdetails.addEventListener("toggle", function() {
  interruptingVRimages.forEach((image) => {
    if (interruptingVRdetails.hasAttribute("open")) {
      image.classList.remove("hideimage");
      image.classList.add("showimage");
    } else {
      image.classList.remove("showimage");
      image.classList.add("hideimage");
    }
  });
});

var spatialResiduedetails = document.querySelector("#spatialResidueDetails");
var spatialResidueimages = document.querySelectorAll(".spatialResidueImages");

spatialResiduedetails.addEventListener("toggle", function() {
  spatialResidueimages.forEach((image) => {
    if (spatialResiduedetails.hasAttribute("open")) {
      image.classList.remove("hideimage");
      image.classList.add("showimage");
    } else {
      image.classList.remove("showimage");
      image.classList.add("hideimage");
    }
  });
});