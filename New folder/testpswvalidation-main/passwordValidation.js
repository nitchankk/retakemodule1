//Mhom
function isPasswordValid(password) {
    password = password.split('')
  console.log(password)

  if (!password) {
    return false
  }
  if (password.length < 8) {
    return false
  }
  if (!password) {
    return false
  }

  const alpha = 'abcdefghijklmnopqrstuvwxyz'
  const upperalpha = alpha.toUpperCase()
  const numbers = '0123456789'
  const spss = '@#$%^&*!'

  let lowerCount = 0
  let upperCount = 0
  let digitCount = 0
  let spsCount = 0

  for (let char of password) {
    if (alpha.includes(char)) {
      lowerCount++
    }
    if (upperalpha.includes(char)) {
      upperCount++
    }
    if (numbers.includes(char)) {
      digitCount++
    }
    if (spss.includes(char)) {
      spsCount++
    }
  }
  console.log('Lowercase Count:', lowerCount)
  console.log('Uppercase Count:', upperCount)
  console.log('Digit Count:', digitCount)
  console.log('Special Character Count:', spsCount)

  if (lowerCount < 1 || upperCount < 1 || digitCount < 1 || spsCount < 1) {
    return false
  } else {
    return true
  }
}


// BestZige
function isPasswordValid2(password) {
    // null, undefined, 0, false, NaN, ""
    if (!password) return false;
    if (password.length < 8) return false;
  
    const alphabets = 'abcdefghijklnmopqrstuvwxyz';
    const upperCase = alphabets.toUpperCase();
    const numbers = '0123456789';
    const specials = '@#$%^&*!';
  
    let lowerCount = 0;
    let upperCount = 0;
    let digitCount = 0;
    let specialCount = 0;
  
    const passwordArray = [...password];
    passwordArray.forEach((element, index, array) => {
      if ([...alphabets].includes(element)) {
        lowerCount++;
      }
      if ([...upperCase].includes(element)) {
        upperCount++;
      }
      if ([...numbers].includes(element)) {
        digitCount++;
      }
      if ([...specials].includes(element)) {
        specialCount++;
      }
    });
  
    if (
      lowerCount == 0 ||
      upperCount == 0 ||
      digitCount == 0 ||
      specialCount == 0
    ) {
      return false;
    }
  
    return true;
  }

module.exports = isPasswordValid;
