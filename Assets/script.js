var textNineAM;
//time function
function updatingtime(){
    var time = moment().format("[It is currently] MMM Do YYYY hh:mm:ss");
    $("#currentDay").text(time);
    }
    setInterval(updatingtime, 1000);



    getInputValueNineAM();
    function getInputValueNineAM(){
        // Selecting the input element and get its value 
        textNineAM = document.getElementById("time1").value;
        localStorage.setItem("textNineAM", textNineAM);
        //console.log("0900: " + textNineAM);
    }
    var temp = localStorage.getItem("textNineAM");
    //console.log(temp);

    window.onload = function() {
        if(localStorage.getItem("textNineAM") !== null)
        {
        //var temp = localStorage.getItem("textNineAM");
        $("input:text").val("Sample Text");
        console.log(temp);
        }
      };

// Store
//localStorage.setItem("lastname", "Smith");
// Retrieve
//document.getElementById("result").innerHTML = localStorage.getItem("lastname");

//console.log(getNine)


//color change for time =========================================
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