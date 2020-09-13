var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var interval1 = setInterval(cycle1, getRandomNumber()*1000);
var interval2 = setInterval(cycle2, getRandomNumber()*1000);
var interval3 = setInterval(cycle3, getRandomNumber()*1000);
function getRandomNumber() {
    return ((Math.random() * (5 - 1)) + 1);
}
function cycle1(){
  var btn1 = document.getElementById("btn1");
  if(btn1.value == "Stop"){
    var children1 = document.getElementById("td1").children;
    var current = counter1 % (children1.length - 2);
    children1[current].style = "display: none";
    counter1++;
    var next = counter1 % (children1.length - 2);
    children1[next].style = "visibility: visible";
  }
}
function cycle2(){
  var btn2 = document.getElementById("btn2");
  if(btn2.value == "Stop"){
    var children2 = document.getElementById("td2").children;
    var current = counter2 % (children2.length - 2);
    children2[current].style = "display: none";
    counter2++;
    var next = counter2 % (children2.length - 2);
    children2[next].style = "visibility: visible";
  }
}

function cycle3(){
  var btn3 = document.getElementById("btn3");
  if(btn3.value == "Stop"){
    var children3 = document.getElementById("td3").children;
    var current = counter3 % (children3.length - 2);
    children3[current].style = "display: none";
    counter3++;
    var next = counter3 % (children3.length - 2);
    children3[next].style = "visibility: visible";
  }
}
var OnClicked = function(name){
  var btn = document.getElementById(name);
  if(btn.value == "Stop"){
    btn.value = "Start";
    if(name == "btn1") {
    	clearInterval(interval1);}
    else if(name == "btn2") {
    	clearInterval(interval2);}
    else if(name == "btn3") {
    	clearInterval(interval3);}
  }
  else if(btn.value == "Start"){
    btn.value = "Stop";
    if(name == "btn1") {
    	interval1 = setInterval(cycle1, getRandomNumber()*1000);}
    else if(name == "btn2") {
    	interval2 = setInterval(cycle2, getRandomNumber()*1000);}
    else if(name == "btn3") {
    	interval3 = setInterval(cycle3, getRandomNumber()*1000);}
  }
}

