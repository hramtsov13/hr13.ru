function getUniqueCharacters(word) { //Defining function to find unique symbols in string
  let unique = ''; // Defining variable for unique chrarcters 
  let countSymbols = word.length;
  for (let i = 0; i < countSymbols; i++) { //FOR is for each element of array
    let currentSymbol = word[i]; //Current symbol from WORD 
    let indexOfSymbol = unique.indexOf(currentSymbol) // Соответствие индекса и символа
    let isNotContain = indexOfSymbol === -1; // If indexOf = -1 => Symbol doesn't exist in the string
    if (isNotContain) {
      unique += word[i]; // Symbol exists if index > -1 
    }
  }
  return unique;
}

let originalArray = ['Разнообразный', 'привет', 'мама', 'брат', 'сестра', 'бабушка'];

let words = originalArray.map(getUniqueCharacters);
// Map takes originalArray. 
// Creates new empty array (words).
// map takes each element(one-by-one), sends each element to the function(getUniqueCharacter)
// Pushes the result of the function in a new array(words).
console.log(words);