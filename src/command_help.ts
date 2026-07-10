//@ts-ignore
import { stdout } from 'node:process';
import type { State } from './state.js';

export async function commandHelp(state: State) {
  stdout.write("Welcome to the Pokedex!\n");
  stdout.write("Usage:\n");

  Object.values(state.commands).forEach((cmd) =>{
    stdout.write(`${cmd.name}: ${cmd.description}\n`);
  
  });
}
