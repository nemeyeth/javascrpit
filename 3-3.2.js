  function isEven(number) {
    if (number == 0) {
	return true; 
	}
    else if (number == 1) {
      return false;
	}
    else if (number < 0) {
      return "??" 
    }
    else {
      return number = isEven(number -2)
      return true
    }
  }
  //nie mam pojęcia czy to jest dobrze