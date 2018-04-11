// Autor: Marc Gómez
// Declarem les variables que utilitzarem
// num és una array (llista) per guardar els valors al bucle for
var num = [];
var i;
// Executem el bucle que guarda els números a l'array
for (var i = 1; i < 101; i++) {
  num[i]= +i;
}
// Amb una funció executem la suma total
function Sum(total, num) {
    return total + num;
}
// Mostrem la suma total i l'array per comprovar que s'ha guardat bé
var promig = num.reduce(Sum) / 100
document.getElementById("js").innerHTML = "La suma seria: " + num.reduce(Sum);
document.getElementById("js2").innerHTML = "El promig és: " + promig;
document.getElementById("js3").innerHTML = "L'array és: " + num.join(" ");
