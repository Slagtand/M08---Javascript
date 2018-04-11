// Autor: Marc Gómez
// Declarem les variables que utilitzarem
// nombres és una array buida per al bucle for
var nombres = [];
var i;
// Executem el bucle que demanarà els deu valors per ficar-los a la llista.
for (var i = 0; i < 10; i++) {
  nombres[i]= prompt("Introdueixi un número:"+i);
}
// Mostrem el número més gran amb la funció Math.max
document.getElementById("js").innerHTML = "El nombre més gran és: " + Math.max.apply(null,nombres);
