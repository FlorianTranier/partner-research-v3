import { SlashCommandBuilder } from '@discordjs/builders'
import { CommandInteraction } from 'discord.js'

export interface ICommand {
  commandDesc: Omit<SlashCommandBuilder, 'addSubcommand' | 'addSubcommandGroup'>,
  handle: (interaction: CommandInteraction) => void
}