var chaine = prompt('entrer une chaine de caractére');
var n=chaine.indexOf(' ');
var ch= chaine.toUpperCase();
var resultat=(ch.charAt(0)).concat('.', ch.charAt(n+1));
alert(resultat);
