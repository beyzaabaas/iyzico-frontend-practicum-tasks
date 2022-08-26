// prompt name
let firstName = document.getElementById("myName");
let person = prompt("Adınızı giriniz.", "");
firstName.innerHTML = `${person}`;

// string day
let day = new Date();
let days = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];

// date
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var d = days[day.getDay()];
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("myClock").innerHTML =
    h + ":" + m + ":" + s + " " + d;
  t = setTimeout(function () {
    startTime();
  }, 500);
}
startTime();