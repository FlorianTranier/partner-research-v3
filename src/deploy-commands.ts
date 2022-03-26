import { SlashCommandBuilder } from '@discordjs/builders'
import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'
import dotenv from 'dotenv'

dotenv.config()

export const deployCommands = () => {
  const commands = [
    new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
    new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
    new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
  ]
    .map(command => command.toJSON())

  const rest = new REST({ version: '9' }).setToken(process.env.DISCORD_TOKEN || '')

  rest.put(Routes.applicationCommands(process.env.DISCORD_CLIENT_ID || ''), { body: commands })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error)
}
