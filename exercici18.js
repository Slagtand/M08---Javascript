// Autor: Marc Gómez
// Declarem les variables que utilitzarem
// nombres és una array buida per al bucle for
var num = prompt("Introdueixi un número per multiplicar:");
var resultat = []
var i;
// Executem el bucle que demanarà els tres valor per ficar-los a la llista.
for (var i = 1; i < 11; i++) {
  resultat[i] = num*i+"<br>";
}
// Mostrem l'array que ha introduït l'usuari
document.getElementById("js").innerHTML = "La taula és:" + "<br>" + resultat.join(" ") ;
