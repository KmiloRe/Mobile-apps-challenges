function generateCombinations() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    const combinations = letterCombinations(phoneNumber);
    const combinationsList = document.getElementById('combinationsList');
  
    // Limpiar la lista antes de agregar nuevas combinaciones
    combinationsList.innerHTML = '';
  
    combinations.forEach(combination => {
      const listItem = document.createElement('li');
      listItem.textContent = combination;
      combinationsList.appendChild(listItem);
    });
    
    totalCombinations.textContent = `Número de combinaciones posibles: ${combinations.length}`;
  }
  
  function letterCombinations(digits) {
    if (digits.length === 0) {
      return [];
    }
  
    const mapping = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    const result = [];
  
    backtrack('', 0);
  
    function backtrack(currentCombination, index) {
      if (index === digits.length) {
        result.push(currentCombination);
      } else {
        const digit = parseInt(digits[index]);
        const letters = mapping[digit];
  
        for (let i = 0; i < letters.length; i++) {
          backtrack(currentCombination + letters[i], index + 1);
        }
      }
    }
  
    return result;
  }
  
  document.getElementById('generateButton').addEventListener('click', generateCombinations);
  