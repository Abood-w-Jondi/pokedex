
import { cleanInput } from './repl-string.js';
import type { State } from './state.js';

export function startREPL(state: State) {
  const { rl } = state;

  // listen to input from the user
  rl.prompt();
  rl.on('line', async (input: string) => {
    const words = cleanInput(input);
    if (words.length > 0) {
      const command = state.commands[words[0]];
      const args = words.slice(1);
      if (command) {
        try {

          await command.callback(state, ...args);

        } catch (err) {
          console.log(err);}
      }else {
        console.log("Unknown command");
      }
    }
    rl.prompt();
  });
}
