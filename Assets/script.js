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
        if(localStorage.getItem("textNineAM") != null)
        {
        var temp = localStorage.getItem("textNineAM");
        console.log(temp);
        }
      };

// Store
//localStorage.setItem("lastname", "Smith");
// Retrieve
//document.getElementById("result").innerHTML = localStorage.getItem("lastname");

//console.log(getNine)



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