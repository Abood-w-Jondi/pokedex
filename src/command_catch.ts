//@ts-ignore
import { stdout } from 'node:process';
import type { State } from './state.js';

export async function commandCatch(state: State, ...args: string[]) {
  const pokemonName = args[0];
  if (!pokemonName) {
    stdout.write("Please provide a Pokemon to catch\n");
    return;
  }

  stdout.write(`Throwing a Pokeball at ${pokemonName}...\n`);

  const pokemon = await state.pokeapi.fetchPokemon(pokemonName);

  const escapeRoll = Math.random() * pokemon.base_experience;
  if (escapeRoll > 40) {
    stdout.write(`${pokemon.name} escaped!\n`);
    return;
  }

  stdout.write(`${pokemon.name} was caught!\n`);
  stdout.write("You may now inspect it with the inspect command.\n");
  state.pokedex[pokemon.name] = pokemon;
}
