AFRAME.registerComponent('switch-src', {
  schema: {type: "int", default: 5},
  init: function() {

    var scene = document.querySelector('a-scene');

    function computePaneSelector(paneNum) {
      var paneSelector = "#front_m";
      switch (paneNum) {
        case 1:
          paneSelector = "#front_m";
          break;
        case 2:
          paneSelector = "#front_l";
          break;
        case 3:
          paneSelector = "#front_r";
          break;
        case 4:
          paneSelector = "#back_m";
          break;
        case 5:
          paneSelector = "#back_l";
          break;
        case 6:
          paneSelector = "#back_r";
          break;
        case 7:
          paneSelector = "#right_m";
          break;
        case 8:
          paneSelector = "#right_l";
          break;
        case 9:
          paneSelector = "#right_r";
          break;
        case 10:
          paneSelector = "#left_m";
          break;
        case 11:
          paneSelector = "#left_l";
          break;
        case 12:
          paneSelector = "#left_r";
          break;
      }
      return paneSelector;
    }

    for (var i = 1; i < 13; i++) {
      var paneSelector = computePaneSelector(i);
      var src = Math.floor(Math.random() * 36 + 1);
      document.querySelector(paneSelector).setAttribute('src', '#pic' + src);
    }

    setTimeout(function() {
      // var nextOpacity = 0.05;
      // while (nextOpacity <= 1.0) {
      //   setTimeout(function() {
      //     for (var i = 1; i < 13; i++) {
      //       var paneSelector = computePaneSelector(i);
      //       document.querySelector(paneSelector).setAttribute('material', 'transparent: true; opacity: ' + nextOpacity + ';');
      //     }
      //     nextOpacity += 0.1;
      //   }, 1000);
      // }
      // setTimeout(function() {
        var nextOpacity = 1.0;
        for (var i = 1; i < 13; i++) {
          var paneSelector = computePaneSelector(i);
          document.querySelector(paneSelector).setAttribute('material', 'transparent: true; opacity: ' + nextOpacity + ';');
        }
    }, 20000);

    scene.addEventListener('changePane', function(event) {
      var newPaneNum = event.detail.newPane;
      var paneSelector = computePaneSelector(newPaneNum);
      // console.log(paneSelector);
      
      var newSrc = Math.floor(Math.random() * 36 + 1);
      document.querySelector(paneSelector).setAttribute('src', '#pic' + newSrc);
      console.log('changed: ' + newPaneNum + ' to: #pic' + newSrc);

      setTimeout(function() {
        var pane = Math.floor(Math.random() * 12 + 1);
        // Ensure same number does not come up twice in a row.
        while (newPaneNum == pane) {
          pane = Math.floor(Math.random() * 12 + 1);
        }
        scene.emit('changePane', {newPane: pane}, false);
      }, 5000);
    });

    setTimeout(function() {
      var pane = Math.floor(Math.random() * 12 + 1);
      scene.emit('changePane', {newPane: pane}, false);
    }, 25000);
  }
})