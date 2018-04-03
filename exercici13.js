// Declarem les variables que utilitzarem
// num és una array (llista) per guardar els valors al bucle for
var mati = [];
var tarda = [];
var nit = [];
var sum_mati = 0;
var sum_tarda = 0;
var sum_nit = 0;
var total_mati = 0;
var total_tarda = 0;
var total_nit = 0;
var i;
// Executem els 2 fors per mati, amb 3 alumnes i la mitjana
for (var i = 0; i < 3; i++) {
  mati[i]= prompt("Edat per mati:"+i);
}
for (var i = 0; i < 3; i++) {
  sum_mati = sum_mati + parseInt(mati[i]);
}
total_mati = sum_mati / 3;
// Executem els 2 fors per tarda, amb 3 alumnes i la mitjana
for (var i = 0; i < 3; i++) {
  tarda[i]= prompt("Edat per tarda:"+i);
}
for (var i = 0; i < 3; i++) {
  sum_tarda = sum_tarda + parseInt(tarda[i]);
}
total_tarda = sum_tarda / 3;
// Executem els 2 fors per nit, amb 3 alumnes i la mitjana
for (var i = 0; i < 3; i++) {
  nit[i]= prompt("Edat per nit:"+i);
}
for (var i = 0; i < 3; i++) {
  sum_nit = sum_nit + parseInt(nit[i]);
}
total_nit = sum_nit / 3;
// Ordenem de major a menor les mitjanes d'edats
// Si el mati és més gran
if (total_mati > total_tarda && total_mati > total_nit) {
  //  Si la tarda és més gran que la nit
  if (total_tarda > total_nit) {
  document.getElementById("js").innerHTML = "La mitjana d'edat de mati és: " + total_mati;
  document.getElementById("js2").innerHTML = "La mitjana d'edat de la tarda és: " + total_tarda;
  document.getElementById("js3").innerHTML = "La mitjana d'edat de la nit és: " + total_nit;
  // Si la nit és més gran que la tarda
  } else if (total_nit > total_tarda) {
    document.getElementById("js").innerHTML = "La mitjana d'edat de mati és: " + total_mati;
    document.getElementById("js2").innerHTML = "La mitjana d'edat de la nit és: " + total_nit;
    document.getElementById("js3").innerHTML = "La mitjana d'edat de la tarda és: " + total_tarda;
  }
// Si la tarda és més gran
} else if (total_tarda > total_mati && total_tarda > total_nit) {
  // Si el mati és més gran que la nit
  if (total_mati > total_nit) {
  document.getElementById("js").innerHTML = "La mitjana d'edat de la tarda és: " + total_tarda;
  document.getElementById("js2").innerHTML = "La mitjana d'edat del mati és: " + total_mati;
  document.getElementById("js3").innerHTML = "La mitjana d'edat de la nit és: " + total_nit;
  // Si la nit és més gran que el mati
  } else if (total_nit > total_mati) {
    document.getElementById("js").innerHTML = "La mitjana d'edat de la tarda és: " + total_tarda;
    document.getElementById("js2").innerHTML = "La mitjana d'edat de la nit és: " + total_nit;
    document.getElementById("js3").innerHTML = "La mitjana d'edat del mati és: " + total_mati;
  }
// Si la nit és més gran
} else if (total_nit > total_mati && total_nit > total_tarda) {
  // Si el matí és més gran que al tarda
  if (total_mati > total_tarda) {
  document.getElementById("js").innerHTML = "La mitjana d'edat de la nit és: " + total_nit;
  document.getElementById("js2").innerHTML = "La mitjana d'edat del mati és: " + total_mati;
  document.getElementById("js3").innerHTML = "La mitjana d'edat de la tarda és: " + total_tarda;
  // Si la tarda és més gran que el matí
  } else if (total_tarda > total_mati) {
    document.getElementById("js").innerHTML = "La mitjana d'edat de la nit és: " + total_nit;
    document.getElementById("js2").innerHTML = "La mitjana d'edat de la tarda és: " + total_tarda;
    document.getElementById("js3").innerHTML = "La mitjana d'edat del mati és: " + total_mati;
  }
}
