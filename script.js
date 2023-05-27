const romanToInt = function(romanNumber) {
  let romanArr = [];

  for (let i = 0; i < romanNumber.length; i++) {
    let romanIndex = romanNumber[i];
    if (romanIndex == 'I') {
      romanIndex = 1;
      romanArr.push(romanIndex);
    } else if (romanIndex == 'V') {
      romanIndex = 5;
      romanArr.push(romanIndex);
    } else if (romanIndex == 'X') {
      romanIndex = 10;
      romanArr.push(romanIndex);
    } else if (romanIndex == 'L') {
      romanIndex = 50;
      romanArr.push(romanIndex);
    } else if (romanIndex == 'C') {
      romanIndex = 100;
      romanArr.push(romanIndex);
    } else if (romanIndex == 'D') {
      romanIndex = 500;
      romanArr.push(romanIndex);
    } else if (romanIndex == 'M') {
      romanIndex = 1000;
      romanArr.push(romanIndex);
    }
  }

  let total = 0;

  if (romanArr.length == 1) {
    total = total + romanArr[0];
  } else {
    for (let i = 0; i < romanArr.length; i++) {
      if (i == (romanArr.length - 1) ) {
        total = total + romanArr[i];
      } else if (romanArr[i] >= (romanArr[i + 1])) {
        total = total + romanArr[i];
      } else if (romanArr[i] <= (romanArr[i + 1])) {
        total = total - romanArr[i];
      }
    }
  }

  return total;
}

// Test ----> Expected output = 604
console.log(romanToInt('DCIV'));