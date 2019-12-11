function passwordIsValid(password) {
    var digitCheck = /^(?=.*\d)/g;
    var lowerCaseChecker = /^(?=.*[a-z])/g;
    var upperCaseChecker = /^(?=.*[A-Z])/g;
    var characterChecker = /^(?=.*[!@#%&=+-_,.;'])/g;

    try { 
        if(password == "")  throw " is empty.";
        if(password.length <= 8 ) throw " is less than 8 characters.";
        
        if(digitCheck.test(password) != true){
            throw " does not contain any digit.";
        }

        if(upperCaseChecker.test(password) != true){
            throw " does not contain any uppercase letter.";
        }

        if(lowerCaseChecker.test(password) != true){
            throw " does not contain any lowercase letter.";
        }

        if(characterChecker.test(password) != true){
            throw " does not contain any special character.";
        }
        
      }
      catch(err) {
        return err;
      }

      return "password is valid";
    
}
function passwordIsOk(password) {
    if (password == "" && password.length < 8) {
        if (password.match(/[a-z]/)||password.match(/[A-Z]/)||password.match(/^(?=.*\d)/)||password.match(/[!@#\$%\^&=+-_,.;'"]/)) {
            return true;    
        }
        
    }
    return false;
}

module.exports = {
    passwordIsValid,passwordIsOk
}