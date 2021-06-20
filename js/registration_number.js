var textValue = document.getElementById('regTextBox');
var addButton = document.querySelector('.regButton');
var display = document.querySelector('.message');
var warning = document.querySelector('.warning');

var regNumberInsta;
if(localStorage['registrationValues']){
  regNumberInsta = RegistrationNumbersEvent(JSON.parse(localStorage['registrationValues']))
}else{
  regNumberInsta = RegistrationNumbersEvent([])
}
display.innerHTML= regNumberInsta.getRegistration();

//var regNumberInsta = RegistrationNumbersEvent();

function addRegistration(){
    var regNumber = textValue.value
    if(regNumber){
      regNumberInsta.setRegistration(regNumber)
    regNumber.innerHTML = regNumberInsta.setRegistration(regNumber);
    display.innerHTML= regNumberInsta.getRegistration();
  //set the local storage to store the list of registration numbers
  localStorage.setItem('registrationValues', JSON.stringify(regNumberInsta.getRegistration()));
  }
    textValue.value='';
}
addButton.addEventListener('click', addRegistration)