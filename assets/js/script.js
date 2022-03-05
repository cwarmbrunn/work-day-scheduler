// Clock Element

var clockElement = document.getElementById("currentDay");

function currentDay() {
  clockElement.textContent = new Date().toString();
}
setInterval(currentDay, 1000);
