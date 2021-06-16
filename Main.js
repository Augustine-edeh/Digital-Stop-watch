var second = 0;

var minute = 0;

var hour = 0;

// Hour, minute, second Elements

var seconds = document.getElementById('seconds');

var minutes = document.getElementById('minutes');

var hours = document.getElementById('hours');

// Input Element

var input = document.getElementById('time_input');

// Button Elements

var start = document.getElementById('start');

var pause = document.getElementById('pause');

var reset = document.getElementById('reset');

// Increment Function

function increment() {

  second++;

  seconds.innerText = second;

  minutes.innerText = minute;

  hours.innerText = hour;

  // Incrementing minutes by one every 60 seconds and resetting seconds to 0

  if (second == 60)

  {

    minutes.innerText = ++minute;

    second = 0;

  }

  // Incrementing hour by one every 60 minutes and resetting minutes to 0

  if (minute == 60)

  {

    hours.innerText = ++hour;

    minute = 0;

    navigator.vibrate(1000, 200);

  }

}

// Start Timer function

start.addEventListener('click', () => {

  var go = setInterval(increment, 1000);

  // console.log(input);

  // pause Timer function

  pause.addEventListener('click', () => {

    clearInterval(go);

  });

  // Reset Timer function

  reset.addEventListener('click', () => {

    clearInterval(go);

    seconds.innerText = second = 0;

    minutes.innerText = minute = 0;

    hours.innerText = hour = 0;

  });

});

// please ignore this code. was only going to try out something with it much later

input.onblur = () => {

  let time = input.value;

  let hour = time / 60;

  console.log(hour);

};
