const { SlashCommandBuilder } = require('@discordjs/builders');
const rollDice = require('../utilties/rollDice')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('initiative')
        .setDescription('roll for intiative'),
    async execute(interaction) {
        await interaction.reply(String(rollDice(1, 20)));
    }
}



