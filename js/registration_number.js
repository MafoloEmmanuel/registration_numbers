var regNumber = document.getElementById('regTextBox');
var addButton = document.getElementById('regButton');
var warning = document.querySelector('.warning');
function addRegistration(){
    if(!regNumber.value){
        warning.innerHTML = "Enter registration number"   
    }
}
addButton.addEventListener('click', addRegistration)