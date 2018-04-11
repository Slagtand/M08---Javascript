// Autor: Marc Gómez
// Declarem les variables que utilitzarem
// Declarem la variable mesos, que és una array amb els mesos de l'any
var num = prompt("Introdueixi el número del DNI:")
var lletra = ["T" , "R" , "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
//
if (isNaN(num) == false) {
  var div = num % 23 ;
  document.getElementById("js").innerHTML = "El resultat és: " + lletra[div];
  document.getElementById("js2").innerHTML = "El resultat de la divisió és: " + div;
  document.getElementById("js3").innerHTML = "El seu DNI és: " + num + "-" + lletra[div];
}
else {
  document.getElementById("js").innerHTML = "No s'ha introduit un número";
}
