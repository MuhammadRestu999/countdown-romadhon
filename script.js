let countDownDate = new Date("2022-04-02 03:00:01").getTime();

let x = setInterval(function() {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  if(distance < 0) {
    clearInterval(x);
    throw "NotError: 00, 00:00:00"
  }

  let days = String(Math.floor(distance / (1000 * 60 * 60 * 24)));
  let hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  let minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
  let seconds = String(Math.floor((distance % (1000 * 60)) / 1000));

  d.innerHTML = days.padStart(2, "0")
  h.innerHTML = hours.padStart(2, "0")
  m.innerHTML = minutes.padStart(2, "0")
  s.innerHTML = seconds.padStart(2, "0")

}, 100);
