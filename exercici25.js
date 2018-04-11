// Autor: Marc Gómez
// Declarem les variables que utilitzarem
// Creem 2 arrays, una pels números introduïts i l'altre per les multiplicacions
var num = [];
var mult = [];
var i;
// Executem el bucle que demanarà els cinc valors
for (var i = 0; i < 5; i++) {
  num[i]= prompt("Introdueixi un número:"+i);
}
// Executem el bucle que multiplica els números introduïts per 2
for (var i = 0; i < 5; i++) {
  mult[i]= num[i] * 2;
}
// Mostrem l'array que ha introduït l'usuari i la seva multiplicació
document.getElementById("js").innerHTML = "Els números introduïts són: " + "<br>" + num.join(" - ");
document.getElementById("js2").innerHTML = "Les multiplicacions són: " + "<br>" + mult.join(" - ");
