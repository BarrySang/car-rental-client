//Dictionary

let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '='];
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let errorMsgs = {
    "length": "the length of characters should",
    "number": "the input should be a number",
    "empty": "this field should be filled",
    "email": "please enter a valid email address",
    "password": "a password should have letters, numbers and symbols",
    "passwordConfirm": "the passwords do not match"
}

// empty input
function isEmpty(input) {
    if(!input || input === '') {
        return true;
    } else {
        return false;
    }
}

// number input
function isNumber(input) {
    if(isNaN(input)) {
        return false;
    } else {
        return true;
    }
}

// email input
function isEmail(input) {
    if(!input.includes('@') || !input.includes('.com')) {
        return false;
    } else {
        return true;
    }
}

// length
function isReqLength(input, reqLength, comparator) {
    if(comparator === 'greater') {
        if(input.length <= reqLength) {
            return false;
        } else {
            return true;
        }
    } else if (comparator === 'equal') {
        if(input.length !== reqLength) {
            return false;
        } else {
            return true;
        }
    }
    
}
// password strength
function isPwdStrong(input) {
    let symbolCheck, alphCheck, numCheck = false;

    // destructure the input into an array
    const inputArray = Array.from(input);

    /* loop through each input element and check if it is either
    a symbolCheck, number or letter
    */
    for(let i = 0; i < inputArray.length; i++) {
        if(symbols.includes(inputArray[i])) {
            symbolCheck = true;
        } else if (numbers.includes(inputArray[i])) {
            numCheck = true;
        } else if(alphabet.includes(inputArray[i])) {
            alphCheck = true;
        }
    }
    
    // check if any of the required characters do not exist
    if(!symbolCheck || !alphCheck || !numCheck) {
        return false;
    } else {
        return true;
    }
}

// confirm password
function isPwdConfirmed(pwdInput, pwdConfInput) {
    if(pwdInput !== pwdConfInput) {
        return false;
    } else {
        return true;
    }
}
export {isEmpty, isNumber, isEmail, isReqLength, isPwdStrong, isPwdConfirmed, errorMsgs};