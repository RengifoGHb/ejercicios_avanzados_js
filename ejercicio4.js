/* 1 */
function findArrayIndex(array, text) {
  for (let character in array) {
    if (array[character] === text) {
      return character
    }
  }
}

/* 2 */
function removeItem(array, text) {
  const index = findArrayIndex(array, text)
  array.splice(index, 1)
  return array
}

const mainCharacters = ['Luke', 'Leia', 'Han Solo', 'Chewbacca', 'Rey', 'Anakin', 'Obi-Wan']

/* 1 */
console.log(findArrayIndex(mainCharacters, 'Chewbacca'))

/* 2 */
console.log(removeItem(mainCharacters, 'Rey'))
