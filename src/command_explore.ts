//@ts-ignore
import { stdout } from 'node:process';
import type { State } from './state.js';

export async function commandExplore(state: State, ...args: string[]) {
  const areaName = args[0];
  if (!areaName){
    stdout.write("Please provide a location area to explore\n");
    return;
  }

  stdout.write(`Exploring ${areaName}...\n`);

  const location = await state.pokeapi.fetchLocation(areaName);

  stdout.write("Found Pokemon:\n");
  for (const encounter of location.pokemon_encounters){
    stdout.write(` - ${encounter.pokemon.name}\n`);}
}
