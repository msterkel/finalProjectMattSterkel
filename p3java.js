//Matt Sterkel

var score1 =0;
var score2 =0;
var score3 =0;
function quest1(){
 var answer = document.getElementById("input").value;
  answer =answer.toLowerCase();
   if( isNaN(answer)){

     if(answer == "mozart and beethoven" || answer =="beethoven and mozart" ||
     answer == "both" || answer == "beethoven mozart" || answer =="mozart beethoven"){
       document.getElementById("display").innerHTML = "child prodigies indeed!";
          document.getElementById("display").classList.add("shown-message");
       score1 = score1 +1;
        setCookie("result",score1,1);
     }
      else if (answer == "mozart"){
        document.getElementById("display").innerHTML = "True, but who else?";
           document.getElementById("display").classList.add("shown-message");
      }
       else{
         document.getElementById("display").innerHTML = "Please try again";
            document.getElementById("display").classList.add("shown-message");
       }
  }
  else {
    document.getElementById("display").classList.remove("shown-message");
    window.alert("No numbers may be entered, only letters.")
  }
}

function quest2(){
 var answer2 = document.getElementById("input2").value;
  answer2 =answer2.toLowerCase();
   if(isNaN(answer2)){

    if(answer2 == "beethoven"){
      document.getElementById("display2").innerHTML = "That's right!";
         document.getElementById("display2").classList.add("shown-message");
      score2 = score2 +1;
       setCookie("result2",score2,1);
    }
     else if( answer2 == "mozart"){
       document.getElementById("display2").innerHTML = "Not that particular individual...";
          document.getElementById("display2").classList.add("shown-message");
     }
      else{
        document.getElementById("display2").innerHTML = "Try again please...";
           document.getElementById("display2").classList.add("shown-message");
      }
  }
  else {
    document.getElementById("display2").classList.remove("shown-message");
    window.alert("No numbers may be entered, only letters.")
  }
}

function quest3(){
 var answer3 = document.getElementById("input3").value;
  answer3 =answer3.toLowerCase();
   if(isNaN(answer3)){

    if(answer3 == "beethoven"){
      document.getElementById("display3").innerHTML = "True indeed!";
         document.getElementById("display3").classList.add("shown-message");
      score3 = score3 +1;
       setCookie("result3",score3,1);
    }
     else{
       document.getElementById("display3").innerHTML = "No, try again please..";
          document.getElementById("display3").classList.add("shown-message");
     }
  }
  else {
    document.getElementById("display3").classList.remove("shown-message");
    window.alert("No numbers may be entered, only letters.")
  }
}

function asPercent(val)
{
  return   val.toFixed(2) * 100 + "%";
}

function quizResults(){
var scores = Number(getCookie("result")) + Number(getCookie("result2"))+ Number(getCookie("result3"));
 var percentage = scores/3;
 document.getElementById("finalScore").innerHTML = asPercent(percentage);
}


//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
