var n = Number(prompt('donner la longeur de tableau'));
var T = [];
function somme() {
  var s = 0;
  for (var i = 0; i < n; i++) {
    T[i] = Number(prompt('remplir la case  par entier' + i));
    if ( T[i] > 0 ) {
      s = s + T[i];
    }
  }

  alert('la somme de tous les nombres positifs de tableau egalent a:' + s);
}
somme();