module.exports = function toReadable (number) {
    let str ='';
  
    let ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  
    let dozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred'];
    if (number <= 20) {
      return ones[number];
    } else {
        let threeDigit = Math.trunc(number / 100); 
        let twoDigit = Math.trunc(number % 100 / 10); 
        let oneDigit = number - threeDigit * 100 - twoDigit * 10; 
        if (number % 100 >= 11 && number % 100 <= 19) {
          str = `${ones[threeDigit]} hundred ${ones[number % 100]}`;
        } else if (oneDigit === 0 && twoDigit === 0) {
          str = `${ones[threeDigit]} hundred`;
        } else if (threeDigit === 0 && oneDigit === 0) {
          str = `${dozens[twoDigit - 1]}`;
        } else if (twoDigit === 0) {
          str = `${ones[threeDigit]} hundred ${ones[oneDigit]}`;
        } else if (oneDigit === 0) {
          str = `${ones[threeDigit]} hundred ${dozens[twoDigit - 1]}`;
        }  else if (threeDigit === 0) {
          str = `${dozens[twoDigit - 1]} ${ones[oneDigit]}`;
        } else {
          str = `${ones[threeDigit]} hundred ${dozens[twoDigit - 1]} ${ones[oneDigit]}`;
        }
   return str;
    } 
  }
