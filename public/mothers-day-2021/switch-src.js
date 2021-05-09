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

    scene.addEventListener('changePane', function(event) {
      var newPaneNum = event.detail.newPane;
      var paneSelector = computePaneSelector(newPaneNum);
      // console.log(paneSelector);
      
      var newSrc = Math.floor(Math.random() * 21 + 1);
      document.querySelector(paneSelector).setAttribute('src', '#pic' + newSrc);
      // console.log('changed: ' + newPaneNum + ' to: #pic' + newSrc);

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
    }, 5000);
  }
})