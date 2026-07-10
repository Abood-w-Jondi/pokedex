//@ts-ignore
import process, { stdout } from 'node:process';
import type { State } from './state.js';

export async function commandExit(state: State) {
  stdout.write("Closing the Pokedex... Goodbye!\n");
  state.rl.close();
  process.exit(0);
}
