function second(second) {
  var SEC = 1;
  var MIN = SEC * 60;
  var HOUR = MIN * 60;
  var DAY = HOUR * 24;
  var day = Math.floor(second / DAY);
  var minus = second - day * DAY;
  var hour = Math.floor(minus / HOUR);
  minus = minus - HOUR * hour;
  var min = Math.floor(minus / MIN);
  minus = minus - MIN * min;
  var sec = minus;
  return {
    day: day,
    hour: hour,
    min: min,
    second: sec,
  }
}

function render(data) {
  var wrapper = document.getElementById('jsCountdown');
  var list = wrapper.children;
  var day = data.day;
  if (day === 0) {
    list[0].className = 'hide';
  } else if (day < 10) {
    list[0].innerHTML = '0' + day + '天';
  } else {
    list[0].innerHTML = day + '天';
  }
  var hour = data.hour;
  if (hour < 10) {
    list[1].innerHTML = '0' + hour + ':';
  } else {
    list[1].innerHTML = hour + ':';
  }
  var min = data.min;
  if (min < 10) {
    list[2].innerHTML = '0' + min + ':';
  } else {
    list[2].innerHTML = min + ':';
  }
  var second = data.second;
  if (second < 10) {
    list[3].innerHTML = '0' + second;
  } else {
    list[3].innerHTML = second;
  }
}

console.log(second(4 + 60 * 3 + 60 * 60 * 2 + 60 * 60 * 24))