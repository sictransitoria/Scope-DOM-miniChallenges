// First Challenge Script

'use strict';

var buttonOne = document.getElementById("buttonOne");
var buttonTwo = document.getElementById("buttonTwo");
var buttonOneAction = document.getElementById("buttonOneAction");
var buttonTwoAction = document.getElementById("buttonTwoAction");

buttonOne.addEventListener("click", (event) => {
	buttonOneAction.innerHTML = "I'm right.";
	buttonTwoAction.innerHTML = "";

});

buttonTwo.addEventListener("click", (event) => {
	buttonTwoAction.innerHTML = "Hey, I'm actually the right one.";
	buttonOneAction.innerHTML = "";

});