//@ts-ignore
import { stdout } from 'node:process';
import type { State } from './state.js';

export async function commandInspect(state: State, ...args: string[]) {
  const pokemonName = args[0];
  if (!pokemonName) {
    stdout.write("Please provide a Pokemon to inspect\n");
    return;
  }

  const pokemon = state.pokedex[pokemonName];
  if (!pokemon) {
    stdout.write("you have not caught that pokemon\n");
    return;
  }

  stdout.write(`Name: ${pokemon.name}\n`);
  stdout.write(`Height: ${pokemon.height}\n`);

  stdout.write(`Weight: ${pokemon.weight}\n`);
  stdout.write("Stats:\n");


  for (const stat of pokemon.stats) {
    
    stdout.write(`  -${stat.stat.name}: ${stat.base_stat}\n`);
  }
  stdout.write("Types:\n");
  for (const type of pokemon.types) {

    stdout.write(`  - ${type.type.name}\n`);
  }
}
