//@ts-ignore
import { stdout } from 'node:process';
import type { State } from './state.js';

export async function commandPokedex(state: State) {
  stdout.write("Your Pokedex:\n");
  for (const name of Object.keys(state.pokedex)) {

    stdout.write(` - ${name}\n`);
    
  }
}
