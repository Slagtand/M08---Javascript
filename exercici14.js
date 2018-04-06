// Declarem les variables que utilitzarem
var nom = prompt("Introdueixi el seu nom:");
var correu = prompt("Introdueixi el seu correu:");
// Fiquem en variables les comprobacions de que el correu tingui "@" i "."
// En cas de tindre-ho, retorna la posició on es troba
// En cas de no tindre-ho, retorna el valor "-1"
var com1 = correu.indexOf("@");
var com2 = correu.indexOf(".");
// Comprovem amb un if si els valors de les variables NO siguin "-1"
// Si algún és "-1" salta a l'error
if ( com1 != -1 && com2 != -1) {
	document.getElementById("js").innerHTML = "El seu nom és: " + nom;
	document.getElementById("js2").innerHTML = "El seu correu es: " + correu;
} else {
	document.getElementById("js2").innerHTML = "El correu ha de tindre un format vàlid: correu@direccio.com";
}
