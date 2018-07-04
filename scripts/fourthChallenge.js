// Fourth Challenge Script

'use strict';

var challengeFour = document.getElementById("challenge-four");
var userName = document.getElementById("username");
var pass = document.getElementById("pass");
var hOne = document.getElementById("changeItUp");
var theRightOne = "12345678";


challengeFour.addEventListener("submit", (event) => {
	 hasNumbers(str) => {
		return !!str.match(/\d+/);
	}
	if (pass.value === theRightOne && hasNumbers(userName.value) === true) {
		hOne.innerHTML = "You've done it " + userName.value;
		event.preventDefault();
	 }
	else {
		alert("If you try harder, you might get it.");
	}

