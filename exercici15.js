// Declarem les variables que utilitzarem
var data = prompt("Introdueixi la data:");
// Establim un patró per la data amb RegExp
// Establim que els dies han de ser vàlids, per exemple 00 no ho és
var patt = new RegExp("([0][1-9]|[1-2][0-9]|[3][0-1])-([0][1-9]|[1][0-2])-[0-9]{4}");
// Ho comparem amb el test. Retorna true o false
var com = patt.test(data);
// Comprovem amb un if si la comprobació ha donat "true"
if ( com == true ) {
	// Si és cert, comprovem que és la data correcte o no
	if ( data == "28-12-2016") {
		document.getElementById("js").innerHTML = "La data introduida és correcte";
	} else {
		document.getElementById("js").innerHTML = "La data introduida no és correcte, hauria de ser 28-12-2016";
	}
// Si no és cert, donem un missatge d'error
} else {
	document.getElementById("js").innerHTML = "El format introduit és incorrecte, hauria de ser: DD-MM-AAAA";
}
