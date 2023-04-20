function telephoneCheck(str) {
    const myRegex = /^(1 |1)?(\d{3}|\(\d{3}\))[-|\s]?(\d{3})[-\s]?(\d{4})$/;
    if (myRegex.test(str)){
      return true;
    }
    return false;
  }
  
  telephoneCheck("555-555-5555");