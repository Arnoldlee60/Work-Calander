var timeDisplayEl = $("#time-display")
var today = moment();

function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}
setInterval(displayTime, 1000);
