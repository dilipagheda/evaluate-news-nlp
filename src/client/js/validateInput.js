function validateInput(inputText) {
  //1. Verify that inputText contains some value
  if (inputText) {
    if (inputText.length === 0) {
      return false;
    }
    //2. Verify that inputText does not contain more than 5000 letters
    if (inputText.length > 5000) {
      return false;
    }
    return true;
  } else {
    return false;
  }
}

export { validateInput };
