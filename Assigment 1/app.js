var height = parseInt(prompt("Please enter height:"));
var radius = parseInt(prompt("Please enter radius:"));

var volume = Math.pow(radius, 2) * 3.14 * height;

alert(volume.toFixed(2));