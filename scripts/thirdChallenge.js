// Third Challenge Script

'use strict';

var pressMyButton = document.getElementById("press");

document.body.addEventListener('keypress', (e) => {

var x = e.keyCode;
var y = String.fromCharCode(x);

press.innerHTML = y;

});