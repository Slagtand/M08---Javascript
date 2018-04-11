// Autor: Marc Gómez
// Declarem les variables que utilitzarem
// nombres és una array buida per al bucle for
var nombres = [];
var i;
// Executem el bucle que demanarà els tres valor per ficar-los a la llista.
for (var i = 0; i < 3; i++) {
  nombres[i]= prompt("Introdueixi un número:"+i);
}
// Mostrem l'array que ha introduït l'usuari
document.getElementById("js").innerHTML = "L'array és: " + nombres.toString();
