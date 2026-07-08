export function cleanInput(input: string): string[] {
  let input_arr = input.trim().toLowerCase().split(" ")
  input_arr = input_arr.filter((word) => (word !== "") && (word !== " "))
  return input_arr
}