const { SlashCommandBuilder } = require('@discordjs/builders');

function rollDice(quantity, sides) {
	const diceArr = [];
  
	for (let i = 0; i < quantity; i++) {
	  diceArr.push(Math.floor(Math.random() * sides) + 1);
	}

	console.log(diceArr);
	
	return diceArr;
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roll')
		.setDescription('Roll with a set number of dice with n sides')
		.addIntegerOption(option => 
			option.setName('quantity')
				.setDescription('Select quantity')
				.setRequired(true)
				.addChoice('1', 1)
				.addChoice('2', 2)
				.addChoice('3', 3)
				.addChoice('4', 4)
				.addChoice('5', 5)
				.addChoice('6', 6)
				.addChoice('7', 7)
				.addChoice('8', 8)
				.addChoice('9', 9)
				.addChoice('10', 10))
		.addIntegerOption(option => 
			option.setName('dice')
				.setDescription('Select dice')
				.setRequired(true)
				.addChoice('d4', 4)
				.addChoice('d6', 6)
				.addChoice('d8', 8)
				.addChoice('d10', 10)
				.addChoice('d12', 12)
				.addChoice('d20', 20)),
	async execute(interaction) {
		const quantity = await interaction.options.getInteger('quantity')
		const diceType = await interaction.options.getInteger('dice')
		for (let i = 0; i < quantity; i++) {
			if (i === 0) {
				await interaction.reply(String(rollDice(quantity, diceType)[i]));
			} else {
				await interaction.followUp(String(rollDice(quantity, diceType)[i]));
			}
		}
	},
};