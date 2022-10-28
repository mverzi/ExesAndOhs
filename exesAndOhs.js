/**
 * This function checks to see if a string has the same amount of 'x's and 'o's.
 * @param {*} str The string to be checked
 * @returns True if the string has the same amount of x's and o's, false otherwise 
 */
function XO(str) {
    str = str.toLowerCase().split('')
    return str.filter(char => char === 'x').length === str.filter(char => char === 'o').length
  }