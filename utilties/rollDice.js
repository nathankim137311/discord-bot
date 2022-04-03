module.exports = function rollDice(quantity, sides) {
	const diceArr = [];
  
	for (let i = 0; i < quantity; i++) {
		const roll = Math.floor(Math.random() * sides) + 1;

		if (roll === 20) {
			diceArr.push('Critical success!');
		} else if (roll === 1) {
			diceArr.push('Critical fail!');
		} else {
			diceArr.push(roll);
		}
	}
	
	return diceArr;
}

