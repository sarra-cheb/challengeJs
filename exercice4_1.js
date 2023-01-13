var societe = JSON.parse(localStorage.getItem('societe')) || []
var i=0;
function loadCompanyName(i) {
  var selection = document.getElementById('select')
  societe.map((element, i) => {
    selection.innerHTML= `
    <option selected>${societe[i].nom}</option>`
  })
}
var nom = document.getElementById('nom');
var lastName = document.getElementById('last_name');
var email = document.getElementById('email');
var adresse = document.getElementById('adresse');
var select=document.getElementById('select');
var enregistrement = document.getElementById('enregistrer');
enregistrement.addEventListener('click', register);
function register() {
  var validForm = true
  if (nom.value == "") {
    nom.classList.add('is-invalid')
    nom.classList.remove('is-valid')
    validForm = false
  } else {
    nom.classList.remove('is-invalid')
    nom.classList.add('is-valid')
  }
  if (lastName.value == "") {
    lastName.classList.add('is-invalid')
    lastName.classList.remove('is-valid')
    validForm = false
  } else {
    lastName.classList.remove('is-invalid')
    lastName.classList.add('is-valid')
  }
  if (email.value == "") {
    email.classList.add('is-invalid')
    email.classList.remove('is-valid')
    validForm = false
  } else {
    email.classList.remove('is-invalid')
    email.classList.add('is-valid')
  }
  if(email.value.indexOf("@")==-1 && email.value !==""){
    email.classList.add('is-invalid')
    email.classList.remove('is-valid')
    validForm=false
  }
  if (adresse.value == "") {
    adresse.classList.add('is-invalid')
    adresse.classList.remove('is-valid')
    validForm = false
  } else {
    adresse.classList.remove('is-invalid')
    adresse.classList.add('is-valid')
  }
  if (validForm == true) {
    var employees = JSON.parse(localStorage.getItem('employees')) || []
   
      var data = {
        nom: nom.value,
        lastName: lastName.value,
        email: email.value,
        adresse: adresse.value,
        select:select.selected,
      }
      employees.push(data)
      localStorage.setItem('employees', JSON.stringify(employees));
      window.location.href="exercice4_2.html";
    }
  }