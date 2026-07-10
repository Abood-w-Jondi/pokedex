//@ts-ignore
import { stdout } from 'node:process';
import type { State } from './state.js';

export async function commandMapb(state: State) {
  if (!state.prevLocationsURL) {
    stdout.write("you're on the first page\n");
    return;
  }

  const locations = await state.pokeapi.fetchLocations(state.prevLocationsURL);

  state.nextLocationsURL = locations.next;
  state.prevLocationsURL = locations.previous;

  for (const loc of locations.results) {
    stdout.write(`${loc.name}\n`);
  }
}
