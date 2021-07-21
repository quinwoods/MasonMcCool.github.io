console.log(date);
alert("shit balls");
alert(date);
var seconds = 0;
var el = document.getElementById("seconds-counter");
function incrementSeconds() {
  var today = new Date();
  var date =
    today.getFullYear() +
    "-" +
    today.getMonth() +
    "-" +
    today.getDate() +
    "-" +
    today.getSeconds();
  document.getElementById("date").innerHTML = date;
  seconds += 1;
}
var cancel = setInterval(incrementSeconds, 1000);
