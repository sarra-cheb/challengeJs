var n = Number(prompt('donner la longeur de tableau'));
var T = [];
function somme() {
  var Tm = [];
  var p = 0;
  for (var i = 0; i < n; i++) {
    T[i] = Number(prompt('remplir la case  par entier' + i));
  }
  var Tp=[];
  var j=0;
  for (var i = 0; i < T.length; i++) {
    if (T[i]>0) {
      Tp[j]=T[i];
      j++;
    }
  }
  var To=Tp.sort();
   var s=0;
   var s=s+To[0]+To[1];

  alert('la somme de deux nombres min positifs de tableau egalent a:' + s);
}
somme();