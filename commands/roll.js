const { SlashCommandBuilder } = require('@discordjs/builders');
const rollDice = require('../utilties/rollDice');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roll')
		.setDescription('Roll with a set number of die with n sides')
		.addStringOption(option => 
			option.setName('quantity')
				.setDescription('Select quantity')
				.setRequired(true))
		.addIntegerOption(option => 
			option.setName('dice')
				.setDescription('Select dice')
				.setRequired(true)
				.addChoice('d4', 4)
				.addChoice('d6', 6)
				.addChoice('d8', 8)
				.addChoice('d10', 10)
				.addChoice('d12', 12)
				.addChoice('d20', 20)
				.addChoice('d100', 100)),
	async execute(interaction) {
		const quantity = await interaction.options.getString('quantity')
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