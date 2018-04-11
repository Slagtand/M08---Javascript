// Autor: Marc Gómez
// Declarem les variables que utilitzarem
// Declarem l'array impares
var impares = [];
var cont = 0
var i;
// Executem el bucle que ficarà els valors impars a la llista amb el if.
// Amb el contador el que fem és que tingui la mateixa posició a la llista sent impar
// Si no tindria el doble de posicions per a les voltes pars que fa el for.
for (var i = 0; i < 22; i++) {
  if (i%2==1) {
    impares[cont]= +i;
    cont++;
  }
}
// Mostrem les alertes amb la llista normal i invertida
window.alert("Impares: " + impares.join(","));
window.alert("Impares: " + impares.join(",") + "\n" +"Impares invertido: " + impares.reverse());
//Demanem a l'usuari que busqui un número a la llista
var num = prompt("Introduzca un número para buscar: ")
// Comparem amb la funció .includes si el número introduit és a la llista
// Ho fem amb parseInt (també es pot amb Number) per assegurar-nos que ho tracta com un número
// Si està a la llista retorna un missatge d'èxit
if (impares.includes(parseInt(num))) {
  document.getElementById("js").innerHTML = "Búsqueda exitosa, el número " + num + " ha sido encontrado";
}
// Si no està a la llista, retorna un missatge d'error
else {
    document.getElementById("js").innerHTML = "No se encuentra en la lista: " + num ;
}
