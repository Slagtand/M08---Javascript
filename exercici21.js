// Autor: Marc Gómez
// Declarem les variables que utilitzarem
// nombres és una array buida per al bucle for
var num = []
var i;
// Executem el bucle que demanarà els tres valor per ficar-los a la llista.
for (var i = 0; i < 100; i++) {
  num[i] = i;
}
// Mostrem l'array que ha introduït l'usuari
document.getElementById("js").innerHTML = "Ascendent:" + "<br>" + num.join(" ") ;
document.getElementById("js2").innerHTML = "Descendent:" + "<br>" + num.reverse().join(" ") ;
