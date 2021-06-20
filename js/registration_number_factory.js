function RegistrationNumbersEvent(myRegistrations=[]) {
    var regValue;
    var regValueList = myRegistrations || [];
    //create a function to set the registration numbers
    function setRegistration(regNumber) {
        regValue = regNumber.substring(0,2).toUpperCase() + " "+ regNumber.substring(2,8);
       // console.log(regNumber.substring(0,2).toUpperCase() + " "+ regNumber.substring(2,8))
        if (!regValueList.includes(regValue)) {
            if (regValue.startsWith('CA') || regValue.startsWith('CN') || regValue.startsWith('CL')){
                regValueList.push(regValue);
            }
        } 
        console.log(regValueList)
        console.log(regValue.toUpperCase()) 
       // console.log(errorMessage)
    }
    function checkTowns(town) {
        if (town == 'Cape Town') {
            return regValue.startsWith('CA');
        } else if (town == 'Wellington') {
            return regValue.startsWith('CN');
        } else if (town == 'Stellenbosch') {
            return regValue.startsWith('CL');
        }
    }
    function getRegistration() {
        console.log(regValueList)
        console.log()       
        return regValueList;
    }
    return {
        setRegistration,    
        getRegistration,
        checkTowns
    }
}