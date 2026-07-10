//@ts-ignore
import { stdout } from 'node:process';
import type { State } from './state.js';

export async function commandMap(state: State) {
  const locations = await state.pokeapi.fetchLocations(
    state.nextLocationsURL ?? undefined,
  );
  state.nextLocationsURL = locations.next;

  state.prevLocationsURL = locations.previous;

  for (const loc of locations.results) {
    stdout.write(`${loc.name}\n`);
  }
}
