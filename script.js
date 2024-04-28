var billP = document.getElementById("bill");

var btnper = "";
var custom = document.getElementById("custom");

var people = document.getElementById("people");

var totalPricePerson = document.getElementById("totalPP");
var tipPricePerson = document.getElementById("tipPP");

function btn1(){
    btnper = 0.05;
    console.log(btnper);
}

function btn2(){
    btnper = 0.10;
    console.log(btnper);
}

function btn3(){
    btnper = 0.15;
    console.log(btnper);
}

function btn4(){
    btnper = 0.25;
    console.log(btnper);
}

function btn5(){
    btnper = 0.50;
    console.log(btnper);
}

function calculate(){
    var val1 = billP.value/people.value;
    var val2 = billP.value*(btnper/100)/people.value;
    totalPricePerson.innerHTML = "$" + val1;
    tipPricePerson.innerHTML = "$" + val2;
}

function reset1(){
    console.log("It will clear all the values");
    billP.value = "";
    people.value = "";
    totalPricePerson.innerHTML = "$0.00";
    tipPricePerson.innerHTML = "$0.00";
    custom.value = "";
}