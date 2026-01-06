// Change profile picture when user hovers over it.
// var numHovers = 0;
// $('.profile-pic').on("mouseenter click", function(){
//   var hoverPic = 'images/profile-pic-b-' + (numHovers % 6) + '-1200.jpg'
//   $(this).attr('src', hoverPic);
//   numHovers++;
// });

var map = L.map('map').setView([1.5, 17.5], 1);
L.tileLayer.provider('Esri.WorldImagery').addTo(map);

// Define marker colors by type
var markerColors = {
  current: '#22c55e',    // green for current location
  research: '#ec4899',   // pink for research presentations
  job: '#f59e0b'         // amber for jobs
};

// Create colored marker icon (map pin style)
function createColoredIcon(color) {
  return L.divIcon({
    className: 'custom-marker',
    html: '<svg width="16" height="24" viewBox="0 0 24 36" xmlns="http://www.w3.org/2000/svg">' +
          '<path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 24 12 24s12-15 12-24c0-6.6-5.4-12-12-12z" fill="' + color + '"/>' +
          '<circle cx="12" cy="12" r="5" fill="white"/>' +
          '</svg>',
    iconSize: [16, 24],
    iconAnchor: [8, 24],
    popupAnchor: [0, -24]
  });
}

// Load locations from JSON file and create markers
fetch('data/locations.json')
  .then(response => response.json())
  .then(locations => {
    // Create markers for each location
    locations.forEach(location => {
      var color = markerColors[location.type] || '#6b7280';
      var icon = createColoredIcon(color);
      var marker = L.marker([location.lat, location.lon], { icon: icon }).addTo(map);
      marker.bindPopup(
        '<h5 class="map-header">' + location.header + '</h5>' +
        '<h6 class="map-sub">' + location.location + '</h6>' +
        '<h6 class="map-sub">' + location.date + '</h6>' +
        '<p style="margin-top: -0.5em;">' + location.description + '</p>'
      );
      marker.on('click', function() {
        this.openPopup();
      });
    });

    // Animate a line connecting all locations in order
    // animateConnectionLine(locations);
  })
  .catch(error => console.error('Error loading locations:', error));

// Animate a polyline connecting locations
function animateConnectionLine(locations) {
  if (locations.length < 2) return;

  var coords = locations.map(loc => [loc.lat, loc.lon]);
  var polyline = L.polyline([], {
    color: '#ffffff',
    weight: 2,
    opacity: 0.6,
    dashArray: '5, 10'
  }).addTo(map);

  var currentSegment = 0;
  var progress = 0;
  var stepsPerSegment = 50;
  var animationSpeed = 30; // ms per step

  function animate() {
    if (currentSegment >= coords.length - 1) return;

    var start = coords[currentSegment];
    var end = coords[currentSegment + 1];
    
    // Interpolate between start and end
    var lat = start[0] + (end[0] - start[0]) * (progress / stepsPerSegment);
    var lon = start[1] + (end[1] - start[1]) * (progress / stepsPerSegment);

    // Build the full path up to current point
    var currentPath = coords.slice(0, currentSegment + 1);
    currentPath.push([lat, lon]);
    polyline.setLatLngs(currentPath);

    progress++;
    if (progress > stepsPerSegment) {
      progress = 0;
      currentSegment++;
    }

    if (currentSegment < coords.length - 1) {
      setTimeout(animate, animationSpeed);
    }
  }

  // Start animation after a short delay
  setTimeout(animate, 500);
}

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

var augPresdetails = document.querySelector("#augmentedPresentationsDetails");
var augPresimages = document.querySelectorAll(".augmentedPresentationsImages");

augPresdetails.addEventListener("toggle", function() {
  augPresimages.forEach((image) => {
    if (augPresdetails.hasAttribute("open")) {
      image.classList.remove("hideimage");
      image.classList.add("showimage");
    } else {
      image.classList.remove("showimage");
      image.classList.add("hideimage");
    }
  });
});