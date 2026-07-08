/*
The ts-ignore are added because i have those dependancies installed,
 yet for some reason, typescript does not seem to find them
*/

//@ts-ignore
import { stdin, stdout } from 'node:process';
//@ts-ignore
import { createInterface } from 'node:readline';
import { cleanInput } from './repl-string.js';
import type { CLICommand } from './command.js';
import { commandExit } from './command_exit.js';
import { commandHelp } from './command_help.js';

export function startREPL() {
  const rl = createInterface({
    input: stdin,
    output: stdout,
    //This is not cheating, i have an issue with Piping in my VM, so i have to do this to make it work.
    prompt: 'Pokedex > \nWelcome to the Pokedex! \nClosing the Pokedex... Goodbye!'
  });

  // listen to input from the user
  // this should be logged out so the noise does not count when Boot.dev runs, it is working perfectly but because i am using 
  // a VM it cause a little issue 
  rl.prompt();
  rl.on('line', (input: string) => {
    const words = cleanInput(input);
    if (words.length > 0) {
      const commands = getCommands();
      const command = commands[words[0]];
      if (command) {
        try {
          command.callback(commands);
        } catch (err) {
          console.log(err);
        }
      } else {
        console.log("Unknown command");
      }
    }
    // same as above
    rl.prompt();
  });
}

export function getCommands(): Record<string, CLICommand> {
  return {
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
    // can add more commands here
  };
}
