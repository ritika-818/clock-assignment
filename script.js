let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");

function display() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let hrotate = 30 * h + m / 2;
  let mrotate = 6 * m;
  let srotate = 6 * s;
  hour.style.transform = `rotate(${hrotate}deg)`;
  min.style.transform = `rotate(${mrotate}deg)`;
  sec.style.transform = `rotate(${srotate}deg)`;
  div1.textContent = Math.abs(h - 12);
  div2.textContent = m;
  div3.textContent = s;
}
setInterval(display, 1000);
