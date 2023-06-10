function isBalancedBracket(str) {
    const stack = [];
    const openingBrackets = ['(', '[', '{'];
    const closingBrackets = [')', ']', '}'];
  
    for (let i = 0; i < str.length; i++) {
      const bracket = str[i];
  
      if (openingBrackets.includes(bracket)) {
        stack.push(bracket);
      } else if (closingBrackets.includes(bracket)) {
        const matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(bracket)];
  
        if (stack.length === 0 || stack[stack.length - 1] !== matchingOpeningBracket) {
          return 'NO';
        }
  
        stack.pop();
      }
    }
  
    return stack.length === 0 ? 'YES' : 'NO';
  }
  
  // Contoh penggunaan
  console.log(isBalancedBracket('{[()]}')); // Output: YES
  console.log(isBalancedBracket('{[(])}')); // Output: NO
  console.log(isBalancedBracket('{(([])[])[]}')); // Output: YES