import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'
import dotenv from 'dotenv'
import { getCommands } from './0-repositories/commands/CommandRepository'

dotenv.config()

export const deployCommands = async (): Promise<void> => {
  const commands = getCommands().map(command => command.commandDesc.toJSON())

  const rest = new REST({ version: '9' }).setToken(process.env.DISCORD_TOKEN || '')

  rest.put(Routes.applicationCommands(process.env.DISCORD_CLIENT_ID || ''), { body: commands })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error)
}
