export function required(value) {
  if (value.isEmpty()) {
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
