import SearchCommand from '../../1-commands/search/SearchCommand'
import { ICommand } from '../../1-commands/ICommand'

const repository: Map<string, ICommand> = new Map<string, ICommand>()

const commands = [
  SearchCommand
]

export const initCommands = (): void => {
  commands.forEach(command => repository.set(command.commandDesc.name, command))
}

export const getCommand = (commandName: string): ICommand | undefined => {
  return repository.get(commandName)
}

export const getCommands = (): ICommand[] => {
  return commands
}