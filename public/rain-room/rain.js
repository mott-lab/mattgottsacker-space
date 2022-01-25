var win_w = window.innerWidth;
var win_h = window.innerHeight;
console.log('window w: ' + win_w);
console.log('window h: ' + win_h);

var rain_div = document.getElementById('rain');
var rain_div_w = rain_div.clientWidth + 1;
console.log('rain_div w: ' + rain_div_w);

var char_w = getTextWidth();
// var char_h = getTextWidth()[1];
var char_h = rain_div.clientHeight;
console.log('char w: ' + char_w);
console.log('char h: ' + char_h);
rain_div.removeChild(document.querySelector('#toremove'));

var chars_per_row = Math.floor(rain_div_w / char_w);
var rows = Math.floor(win_h / char_h);
console.log('chars per row: ' + chars_per_row);
console.log('rows: ' + rows);

var arr = create_array(chars_per_row, rows);
// refresh_output();
// rain2();
rain_simple();

// let row_of_sky = '00000';
async function rain_simple() {
  let rain_freq = (chars_per_row * 2);
  while(1) {
    let row_text = document.createElement("div");
    for (let i = 0; i < chars_per_row - 1; i++) {
      let cell_text = document.createElement("span");
      let is_rain = Math.round(Math.random() * rain_freq);
      if (is_rain == 1) {
        cell_text.classList.add("one");
        cell_text.innerHTML = '1';
      } else {
        cell_text.innerHTML = '0';
      }
      row_text.appendChild(cell_text);
    }
    rain_div.prepend(row_text);
    // console.log(rain_div.childElementCount);
    if (rain_div.childElementCount >= rows-3) {
      rain_div.removeChild(rain_div.lastChild);
    }
    await sleep(200);
  }
}

async function rain() {
  while(1) {
    let start = Math.round(Math.random() * (chars_per_row / 10));
    let spacing = Math.round(Math.random() * 15);
    await rain_wave(start, spacing);

  }
}

function rain_wave(start, spacing) {
  return new Promise(resolve => function() {
    for (let i = start; i < chars_per_row; i+= spacing) {
      rain_drop(arr, i);
    }
      });
}

async function rain2() {
  let iter = 1;
  while(1) {
    console.log('iter: ' + iter);
    let wave_delay = 20000;
    // console.log(wave_delay);
    let start = Math.round(Math.random() * (chars_per_row / 10));
    let spacing = Math.round(Math.random() * (chars_per_row / 10) + 10);
    // dirty way to find out how many drops in this wave
    // let drop_count = 0;
    // for (let i = start; i < chars_per_row; i+= spacing) {
    //   drop_count++;
    // }

    for (let i = start; i < chars_per_row; i+= spacing) {
      delay = get_delay(i);
      rain_drop(arr, i);
    }
    await sleep(wave_delay);
    iter++;
    // rain2();
  }
}

// let start = Math.round(Math.random() * (chars_per_row / 10));
// let spacing = Math.round(Math.random() * 15);
// for (let i = start; i < chars_per_row; i+= spacing) {
//   rain_drop(arr, i);
// }

// increment first index to move down

async function rain_drop(arr, col) {
  let delay = Math.random() * 12000 + 200;
  await sleep(delay);
  let drop_speed = Math.random() * 100 + 50;
  let altitude = 0;
  arr[altitude][col] = 1;
  while (altitude < arr.length - 1) {
    arr[altitude][col] = 0;
    arr[altitude + 1][col] = 1;
    altitude++;
    refresh_output();
    await sleep(50);
  }
  // console.log(arr);
  arr[arr.length-1][col] = 0;
  refresh_output();
  // console.log(arr);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function create_array(chars_per_row, rows) {
  var arr = new Array();
  for (let i = 1; i < rows; i++) {
    var row = new Array(chars_per_row-1).fill(0);
    arr.push(row);
  }
  return arr;
}

function print_rows(arr) {
  for (let i = 0; i < arr.length; i++) {
    let row_text = document.createElement("div");
    for (let j = 0; j < arr[i].length; j++) {
      let cell_text = document.createElement("span");
      if (arr[i][j] == 1) {
        cell_text.classList.add("one");
      }
      cell_text.innerHTML = arr[i][j];
      row_text.appendChild(cell_text);
      // row_text.innerHTML += cell_text;
    }

    rain_div.appendChild(row_text);
  }
}

function refresh_output() {
  rain_div.innerHTML = '';
  print_rows(arr);
}

// var rain_canvas = document.getElementById('rainCanvas');
// var ctx = rain_canvas.getContext('2d');
// ctx.font = "12px Ubuntu";
// var txt = "010";
// ctx.fillText("width:" + ctx.measureText(txt).width, 10, 50)
// ctx.fillText(txt, 10, 100);

function getTextWidth() {
  text = document.createElement("span");
  rain_div.appendChild(text);

  text.style.font = 'monospace';
  text.style.fontSize = 1 + "rem";
  text.style.height = 'auto';
  text.style.width = 'auto';
  text.style.position = 'absolute';
  text.style.whiteSpace = 'no-wrap';
  text.innerHTML = '0';

  width = Math.ceil(text.clientWidth);
  // height = rain_div.clientHeight;
  formattedWidth = width + "px";

  // document.querySelector('.output').textContent
  //         = formattedWidth;
  rain_div.removeChild(text);
  return width;
}