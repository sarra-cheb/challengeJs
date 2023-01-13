var employees = JSON.parse(localStorage.getItem('employees')) || []
var i=0;
function list(i) {
  var drop = document.getElementById('btnGroupDrop1');
  employees.map((element, i) => {
    drop.innerHTML += `
    <ul> 
      <li>${employees[i].nom}<li>
      </ul>`
  })
}
var nom = document.getElementById('nom');
var adresse = document.getElementById('adresse');
var email = document.getElementById('email');
var upload = document.getElementById('btn');
upload.addEventListener('click', register);
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
    var societe = JSON.parse(localStorage.getItem('societe')) || []
   
      var data = {
        nom: nom.value,
        email: email.value,
        adresse: adresse.value,
      }
      societe.push(data)
      localStorage.setItem('societe', JSON.stringify(societe));
      window.location.reload();
    }
  }