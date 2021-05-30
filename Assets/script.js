var inputNine = document.querySelector("#time1");;
//time function
function updatingtime(){
    var time = moment().format("[It is currently] MMM Do YYYY hh:mm:ss");
    $("#currentDay").text(time);
    }
    setInterval(updatingtime, 1000);

    //getInputValueNineAM();
    function getInputValueNineAM(){
        // Selecting the input element and get its value 
        var textNineAM = document.getElementById("time1").value;
        localStorage.setItem("textNineAM", textNineAM);
        console.log("0900: " + textNineAM);
    }
    function getInputValueTenAM(){
        // Selecting the input element and get its value 
        var textTenAM = document.getElementById("time2").value;
        localStorage.setItem("textTenAM", textTenAM);
        console.log("1000: " + textTenAM);
    }
    function getInputValueElevenAM(){
        // Selecting the input element and get its value 
        var textElevenAM = document.getElementById("time3").value;
        localStorage.setItem("textElevenAM", textElevenAM);
        console.log("1100: " + textElevenAM);
    }
    function getInputValueTwelvePM(){
        // Selecting the input element and get its value 
        var textTwelvePM = document.getElementById("time4").value;
        localStorage.setItem("textTwelvePM", textTwelvePM);
        console.log("1200: " + textTwelvePM);
    }
    function getInputValueOnePM(){
        // Selecting the input element and get its value 
        var textOnePM = document.getElementById("time5").value;
        localStorage.setItem("textOnePM", textOnePM);
        console.log("1300: " + textOnePM);
    }
    function getInputValueTwoPM(){
        // Selecting the input element and get its value 
        var textTwoPM = document.getElementById("time6").value;
        localStorage.setItem("textTwoPM", textTwoPM);
        console.log("1400: " + textOnePM);
    }
    function getInputValueThreePM(){
        // Selecting the input element and get its value 
        var textThreePM = document.getElementById("time7").value;
        localStorage.setItem("textThreePM", textThreePM);
        console.log("1500: " + textThreePM);
    }
    function getInputValueFourPM(){
        // Selecting the input element and get its value 
        var textFourPM = document.getElementById("time8").value;
        localStorage.setItem("textFourPM", textFourPM);
        console.log("1600: " + textFourPM);
    }
    function getInputValueFivePM(){
        // Selecting the input element and get its value 
        var textFivePM = document.getElementById("time9").value;
        localStorage.setItem("textFivePM", textFivePM);
        console.log("1700: " + textFivePM);
    }


// Store
//localStorage.setItem("lastname", "Smith");
// Retrieve
//document.getElementById("result").innerHTML = localStorage.getItem("lastname");

//console.log(getNine)

window.onload = function() {
    var name1 = localStorage.getItem("textNineAM");
    if (name1 !== null) {
    $('#time1').val(name1);
    }
    var name2 = localStorage.getItem("textTenAM");
    if (name2 !== null) {
    $('#time2').val(name2);
    }
    var name3 = localStorage.getItem("textElevenAM");
    if (name3 !== null) {
    $('#time3').val(name3);
    }
    var name4 = localStorage.getItem("textTwelvePM");
    if (name4 !== null) {
    $('#time4').val(name4);
    }
    var name5 = localStorage.getItem("textOnePM");
    if (name5 !== null) {
    $('#time5').val(name5);
    }
    var name6 = localStorage.getItem("textTwoPM");
    if (name6 !== null) {
    $('#time6').val(name6);
    }
    var name7 = localStorage.getItem("textThreePM");
    if (name7 !== null) {
    $('#time7').val(name7);
    }
    var name8 = localStorage.getItem("textFourPM");
    if (name8 !== null) {
    $('#time8').val(name8);
    }
    var name9 = localStorage.getItem("textFivePM");
    if (name9 !== null) {
    $('#time9').val(name9);
    }

};




//color change for time ===========================RED is PAST GREEN is present and Gray is Future
function updateBackground9AM() {
    var hr = (new Date()).getHours(),
      body = document.getElementById("time1"),
      bstyle = body.style,    
      hello = document.querySelector("#text1");    
    if (hr < 9) {
      bstyle.backgroundColor = "gray";
    } else if (hr > 9){
      bstyle.backgroundColor = "red";
     // bstyle.color = "white";
      //hello.innerText ="Have a good day!";
    } else{
      bstyle.backgroundColor = "green";
    } 
  }
  setInterval(updateBackground9AM, 1000 * 60);
  updateBackground9AM();

  function updateBackground10AM() {
    var hr = (new Date()).getHours(),
      body = document.getElementById("time2"),
      bstyle = body.style,    
      hello = document.querySelector("#text2");    
    if (hr < 10) {
      bstyle.backgroundColor = "gray";
    } else if (hr > 10){
      bstyle.backgroundColor = "red";
     // bstyle.color = "white";
      //hello.innerText ="Have a good day!";
    } else{
      bstyle.backgroundColor = "green";
    } 
  }
  setInterval(updateBackground10AM, 1000 * 60);
  updateBackground10AM();

  function updateBackground11AM() {
    var hr = (new Date()).getHours(),
      body = document.getElementById("time3"),
      bstyle = body.style,    
      hello = document.querySelector("#text3");    
    if (hr < 11) {
      bstyle.backgroundColor = "gray";
    } else if (hr > 11){
      bstyle.backgroundColor = "red";
     // bstyle.color = "white";
      //hello.innerText ="Have a good day!";
    } else{
      bstyle.backgroundColor = "green";
    } 
  }
  setInterval(updateBackground11AM, 1000 * 60);
  updateBackground11AM();

  function updateBackground12PM() {
    var hr = (new Date()).getHours(),
      body = document.getElementById("time4"),
      bstyle = body.style,    
      hello = document.querySelector("#text4");    
    if (hr < 12) {
      bstyle.backgroundColor = "gray";
    } else if (hr > 12){
      bstyle.backgroundColor = "red";
     // bstyle.color = "white";
      //hello.innerText ="Have a good day!";
    } else{
      bstyle.backgroundColor = "green";
    } 
  }
  setInterval(updateBackground12PM, 1000 * 60);
  updateBackground12PM();
  
  function updateBackground1PM() {
    var hr = (new Date()).getHours(),
      body = document.getElementById("time5"),
      bstyle = body.style,    
      hello = document.querySelector("#text5");    
    if (hr < 13) {
      bstyle.backgroundColor = "gray";
    } else if (hr > 13){
      bstyle.backgroundColor = "red";
     // bstyle.color = "white";
      //hello.innerText ="Have a good day!";
    } else{
      bstyle.backgroundColor = "green";
    } 
  }
  setInterval(updateBackground1PM, 1000 * 60);
  updateBackground1PM();
  
  function updateBackground2PM() {
    var hr = (new Date()).getHours(),
      body = document.getElementById("time6"),
      bstyle = body.style,    
      hello = document.querySelector("#text6");    
    if (hr < 14) {
      bstyle.backgroundColor = "gray";
    } else if (hr > 14){
      bstyle.backgroundColor = "red";
     // bstyle.color = "white";
      //hello.innerText ="Have a good day!";
    } else{
      bstyle.backgroundColor = "green";
    } 
  }
  setInterval(updateBackground2PM, 1000 * 60);
  updateBackground2PM();

  function updateBackground3PM() {
    var hr = (new Date()).getHours(),
      body = document.getElementById("time7"),
      bstyle = body.style,    
      hello = document.querySelector("#text7");    
    if (hr < 15) {
      bstyle.backgroundColor = "gray";
    } else if (hr > 15){
      bstyle.backgroundColor = "red";
     // bstyle.color = "white";
      //hello.innerText ="Have a good day!";
    } else{
      bstyle.backgroundColor = "green";
    } 
  }
  setInterval(updateBackground3PM, 1000 * 60);
  updateBackground3PM();

  function updateBackground4PM() {
    var hr = (new Date()).getHours(),
      body = document.getElementById("time8"),
      bstyle = body.style,    
      hello = document.querySelector("#text8");    
    if (hr < 16) {
      bstyle.backgroundColor = "gray";
    } else if (hr > 16){
      bstyle.backgroundColor = "red";
     // bstyle.color = "white";
      //hello.innerText ="Have a good day!";
    } else{
      bstyle.backgroundColor = "green";
    } 
  }
  setInterval(updateBackground4PM, 1000 * 60);
  updateBackground4PM();

  function updateBackground5PM() {
    var hr = (new Date()).getHours(),
      body = document.getElementById("time9"),
      bstyle = body.style,    
      hello = document.querySelector("#text9");    
    if (hr < 17) {
      bstyle.backgroundColor = "gray";
    } else if (hr > 17){
      bstyle.backgroundColor = "red";
     // bstyle.color = "white";
      //hello.innerText ="Have a good day!";
    } else{
      bstyle.backgroundColor = "green";
    } 
  }
  setInterval(updateBackground5PM, 1000 * 60);
  updateBackground5PM();