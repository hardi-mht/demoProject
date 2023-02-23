export function required(value) {
  if (!value) {
    return true;
  } else {
    return false;
  }
}

export function minimumValue(value, minVal) {
  if (value.length >= minVal) {
    return false;
  } else {
    return true;
  }
}

export function regexValdication(value, regex){
    return !regex.test(value);
}

export function validatePIN (pin) {
  if(pin.length === 4 ||  pin.length === 6 ) {
    if( /[0-9]/.test(pin))  {
      return true;
    }else {return false;}
  }else {
      return false;
      }
}
