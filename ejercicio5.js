function rollDice(number) {
  let dice = Math.floor(Math.random() * number) + 1
  return dice
}

console.log(rollDice(6))
