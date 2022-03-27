
import { Client, Intents } from 'discord.js'
import dotenv from 'dotenv'
import { getCommand, initCommands } from './0-repositories/commands/CommandRepository'
import { deployCommands } from './deploy-commands'

dotenv.config()

initCommands()
deployCommands()

const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

client.once('ready', () => {
  console.log('Ready !')
})

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return

  const command = getCommand(interaction.commandName)

  if (!command) return

  try {
    await command.handle(interaction)
  } catch (error) {
    console.error(error)
    await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true })
  }
})

client.login(process.env.DISCORD_TOKEN)