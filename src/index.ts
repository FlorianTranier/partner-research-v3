
import { Client, Intents } from 'discord.js'
import dotenv from 'dotenv'
import { deployCommands } from './deploy-commands'

dotenv.config()

const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

client.once('ready', () => {
  deployCommands()
  console.log('Ready !')
})

client.login(process.env.DISCORD_TOKEN)