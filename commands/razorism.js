const {
  razorisms
} = require('../razorisms.js');
const {
  SlashCommandBuilder
} = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('razorism')
    .setDescription('Replies with a random Razorism!'),
  async execute(interaction) {
    //Load all razorisms

    const theRazorism = razorisms[Math.floor(Math.random() * razorisms.length)];
    await interaction.reply(theRazorism.razorism);
  },
};
