// Autor: Marc Gómez
// Amb un bucle do-while demanem els números i fem les operacions necessàries
// S'executarà per lo menys 1 cop, quan és superior al while s'acava.
do {
  var num1 = prompt("Introdueixi el primer número: ");
  var num2 = prompt("Introdueixi el segon número: ");
  var sum = parseInt(num1) + parseInt(num2);
  var resta = num1 - num2;
  var mult = num1 * num2;
  var div = num1 / num2;
  window.alert("La suma és: " + sum + "\n" + "La resta és: " + resta + "\n" + "La multiplicació és: " + mult + "\n" + "La divisió és: " + div);
}
while (sum <= 1000);
