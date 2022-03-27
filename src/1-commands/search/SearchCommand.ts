import { SlashCommandBuilder } from '@discordjs/builders'
import { CommandInteraction, GuildMember, MessageEmbed } from 'discord.js'
import { ICommand } from '../ICommand'

const SearchCommand: ICommand = {
  commandDesc: new SlashCommandBuilder().setName('search')
    .setDescription('Say the game that you want to play with others, and wait for other players answers !')
    .addStringOption(option => option.setName('game').setDescription('Game').setRequired(true)),

  async handle(interaction: CommandInteraction) {

    const game = interaction.options.getString('game')

    const author = interaction.user

    const msg = new MessageEmbed()

    msg
      .setAuthor({
        name: author.username || '',
        iconURL: author.displayAvatarURL() ?? undefined
      })

    msg.setTitle(`${author.username} wants to play at ${game}`)

    await interaction.reply({ embeds: [msg] })
  },
}

export default SearchCommand