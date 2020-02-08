var Now = new Date();
var CurrentDay = Now.getDay();

var x = document.getElementById("pancake");
if (CurrentDay == 5) {
  x.style.display = "block";
} else {
  x.style.display = "none";
}

  