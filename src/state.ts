//@ts-ignore
import { stdin, stdout } from 'node:process';
//@ts-ignore
import { createInterface, type Interface } from 'node:readline';
import { PokeAPI, type Pokemon } from './pokeapi.js';
import { commandExit } from './command_exit.js';
import { commandHelp } from './command_help.js';
import { commandMap } from './command_map.js';
import { commandMapb } from './command_mapb.js';
import { commandExplore } from './command_explore.js';
import { commandCatch } from './command_catch.js';
import { commandInspect } from './command_inspect.js';

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State = {
  rl: Interface;
  commands: Record<string, CLICommand>;
  pokeapi: PokeAPI;
  nextLocationsURL: string | null;
  prevLocationsURL: string | null;
  pokedex: Record<string, Pokemon>;
};

export function initState(): State {
  const rl = createInterface({
    input: stdin,
    output: stdout,
    prompt: 'Pokedex > ',
  });

  const commands: Record<string, CLICommand> = {
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: commandExit,
    },
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    map: {
      name: "map",
      description: "Displays the next 20 location areas",
      callback: commandMap,
    },
    mapb: {
      name: "mapb",
      description: "Displays the previous 20 location areas",
      callback: commandMapb,
    },
    explore: {
      name: "explore",
      description: "Lists the Pokemon in a given location area",
      callback: commandExplore,
    },
    catch: {
      name: "catch",
      description: "Attempts to catch a Pokemon and add it to your Pokedex",
      callback: commandCatch,
    },
    inspect: {
      name: "inspect",
      description: "Displays details about a Pokemon you have caught",
      callback: commandInspect,
    },
    // can add more commands here
  };

  const cacheInterval = 1000 * 60 * 5; // 5 minutes

  return {
    rl,
    commands,
    pokeapi: new PokeAPI(cacheInterval),
    nextLocationsURL: null,
    prevLocationsURL: null,
    pokedex: {},
  };
}
