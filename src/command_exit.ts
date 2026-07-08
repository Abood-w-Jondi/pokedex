//@ts-ignore
import process from 'node:process';
//@ts-ignore
import { stdout} from 'node:process';
export function commandExit() {
  stdout.write("Closing the Pokedex... Goodbye!\n");
  process.exit(0);
}
