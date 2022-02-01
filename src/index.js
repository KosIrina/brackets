module.exports = function check(str, bracketsConfig) {
  // your solution
  
  const openBrackets = ['(', '[', '{', '1', '3', '5']; 
  const doubleBrackets = ['|', '7', '8'];
  const bracketsPair = {
    [')']: '(',
    [']']: '[',
    ['}']: '{',
    ['|']: '|',
    ['2']: '1',
    ['4']: '3',
    ['6']: '5',
    ['7']: '7',
    ['8']: '8',
  };

  let stack = [];
  

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    let topElement = stack[stack.length - 1];
    
    if (openBrackets.includes(currentSymbol)) {
      stack.push(currentSymbol);
    } else if((doubleBrackets.includes(currentSymbol)) && bracketsPair[currentSymbol] !== topElement) {
        stack.push(currentSymbol);
      } else {
      if (stack.length === 0) {
        return false;
      }

      if (bracketsPair[currentSymbol] === topElement)  {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}
