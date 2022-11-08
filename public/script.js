(() => {
  let countDownDate = new Date("2023-03-23 03:00:00").getTime();

  let x = setInterval(() => {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    if(distance <= 0) {
      clearInterval(x);
      throw "Never gonna give you up";
    };

    let days = String(Math.floor(distance / (1000 * 60 * 60 * 24)));
    let hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
   let minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    let seconds = String(Math.floor((distance % (1000 * 60)) / 1000));

    d.innerHTML = days.padStart(2, "0");
    h.innerHTML = hours.padStart(2, "0");
    m.innerHTML = minutes.padStart(2, "0");
    s.innerHTML = seconds.padStart(2, "0");
  }, 100);

  let word = ["Never gonna give you up", "Never gonna let you down", "Never gonna run around and desert you", "Never gonna make you cry", "Never gonna say goodbye", "Never gonna tell a lie and hurt you"]; // Hehe
  let i = 0;
  setInterval(() => {
    if(i == 0) console.clear("");
    console.log(word[i++]);
    i = i % word.length;
  }, 1000);
})();
