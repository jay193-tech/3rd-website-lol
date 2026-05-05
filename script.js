let body = document.body;
let noBtn = document.getElementById("noBtn");
let yesBtn = document.getElementById("yesBtn");
let text = document.getElementById("text");
let image = document.getElementById("image");
let fire = document.getElementById("fireSticker");


let noClicks = 0;

let messages = ["No", "Are you sure?", "G NA", "arte"];

noBtn.onclick = function () {
  noClicks++;

  // change text
  noBtn.innerText = messages[Math.min(noClicks, messages.length - 1)];

  // make YES button bigger each time
  let size = 16 + noClicks * 5;
  yesBtn.style.fontSize = size + "px";
  yesBtn.style.padding = (10 + noClicks * 2) + "px";

  // optional: loop message if it goes past
  if (noClicks > messages.length) {
    noBtn.innerText = "arte";
  }
};

yesBtn.onclick = function () {
  image.src = "https://media.tenor.com/VV54IJ7aT5AAAAAM/airball-airball-yet-scored.gif"
  text.innerText = "try mo irestore haha 🎉";

  noBtn.style.display = "none";
  yesBtn.style.display = "none";
// 🔥 make fire bounce
  fire.classList.add("bounce");
};
 // ⚡ green screen flash
  body.classList.add("flash-green");

  setTimeout(() => {
    body.classList.remove("flash-green");
  }, 400);
console.log("JS is connected!");
