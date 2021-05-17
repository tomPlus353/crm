function askForLoot () {
var txt = null;
if (confirm("Can I get your credit card number!")) {
	var txt = "Thanks!";
} else {
	var txt = "Aw, no fair!";
}

alert(txt);
}
document.onload = askForLoot();
