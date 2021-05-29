function updatingtime(){
var time = moment().format("[It is currently] MMM Do YYYY hh:mm:ss");
$("#currentDay").text(time);
}
setInterval(updatingtime, 1000);

