// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

$(function() {
  // Google Maps Scripts
  var map = null;
  // When the window has finished loading create our google map below
  google.maps.event.addDomListener(window, 'load', init);
  google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(new google.maps.LatLng(38.636497, -90.233903));
  });

  function init() {
    var mapOptions = {
      // How zoomed in you want the map to start at (always required)
      zoom: 9,

      // The latitude and longitude to center the map (always required)
      center: new google.maps.LatLng(38.636497, -90.233903), // St. Louis University

      // Disables the default Google Maps UI components
      disableDefaultUI: true,
      scrollwheel: true,
      draggable: true,

      // Map stylization.
      styles: [{
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "color": "#000000"
        }, {
          "lightness": 17
        }]
      }, {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{
          "color": "#000000"
        }, {
          "lightness": 20
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#42DCA3"
        }, {
          "lightness": 17
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#1d9b6c"
        }, {
          "lightness": 29
        }, {
          "weight": 0.2
        }]
      }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
          "color": "#1d9b6c"
        }, {
          "lightness": 18
        }]
      }, {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{
          "color": "#1d9b6c"
        }, {
          "lightness": 16
        }]
      }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
          "color": "#000000"
        }, {
          "lightness": 21
        }]
      }, {
        "elementType": "labels.text.stroke",
        "stylers": [{
          "visibility": "on"
        }, {
          "color": "#000000"
        }, {
          "lightness": 16
        }]
      }, {
        "elementType": "labels.text.fill",
        "stylers": [{
          "saturation": 36
        }, {
          "color": "#fdf6e3"
        }, {
          "lightness": 40
        }]
      }, {
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
          "color": "#000000"
        }, {
          "lightness": 19
        }]
      }, {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#000000"
        }, {
          "lightness": 20
        }]
      }, {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#000000"
        }, {
          "lightness": 17
        }, {
          "weight": 1.2
        }]
      }]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var mapIcon = 'images/map-marker.svg';
    var myLatLng = new google.maps.LatLng(38.636497, -90.233903);
    var homeMarker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: mapIcon
    });
  }

  // cyclePics();
  var myInterval;  // Declare it on global scope.
  var num = 0;

  $('.profile-pic')
      .mouseover(function() {
        myInterval = setInterval(function() {
          var picnum = num%9;
          var picname = 'images/profile-pic.jpg';
          if (picnum != 0) {
            picname = 'images/profile-pic-glitched-' + picnum + '.png';
          }
          console.log(picname);
          $('.profile-pic').attr('src', picname);
          num++;
        }, 250);
      })
      .mouseout(function() {
        num = 0;
        clearInterval(myInterval);  // Clear the interval
        $(this).attr('src', 'images/profile-pic.jpg');
      });
});

// async function cyclePics() {
//   var num = 0;
//
//   for(;;) {
//
//     var picnum = num%8;
//     var picname = 'images/profile-pic.jpg';
//     if (picnum != 0) {
//       picname = 'images/profile-pic-glitched-' + (num % 8) + '.png';
//     }
//     $('profile-pic').attr('src', picname);
//     await sleep(500);
//     num++;
//
//   }
// }
// Change profile picture when user hovers over it.
// var numHovers = 0;
// $('.profile-pic').mouseenter(function(){
//   var hoverPic = 'images/profile-pic-glitched-' + (numHovers % 8) + '.png'
//   $(this).attr('src', hoverPic);
//   numHovers++;
// });
//
// $('.profile-pic').mouseleave(function(){
//   $(this).attr('src', 'images/profile-pic.jpg');
// });
