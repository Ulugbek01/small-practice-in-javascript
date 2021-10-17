let text = document.getElementById("text");
let fontSize = 16;
document.getElementById("btn-1").onclick = function () {
  // console.log(fontSize);
  text.style.fontSize = fontSize + "px";
  fontSize++;
};

document.getElementById("btn-2").onclick = function () {
  text.style.fontSize = fontSize + "px";
  fontSize--;
};

document.getElementById("btn").onclick = function () {
  document.body.classList.toggle("bg-color");
};
