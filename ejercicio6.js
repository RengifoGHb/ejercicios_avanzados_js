const fantasticFour = ['La antorcha humana', 'Mr. Fantástico', 'La mujer invisible', 'La cosa']

function swap(array, index_one, index_two) {
  let index_tree = array[index_one]
  array[index_one] = array[index_two]
  array[index_two] = index_tree
  return array
}

console.log(swap(fantasticFour, 0, 2))
