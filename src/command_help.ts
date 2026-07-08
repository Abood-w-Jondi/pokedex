import type { CLICommand } from "./command.js";
//@ts-ignore
import { stdout} from 'node:process';

export function commandHelp(commands: Record<string, CLICommand>) {
  stdout.write("Welcome to the Pokedex!\n");
  stdout.write("Usage:\n");
  Object.values(commands).forEach((cmd) => {
    stdout.write(`${cmd.name}: ${cmd.description}\n`);
  });
}
