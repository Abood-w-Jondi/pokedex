import { cleanInput } from "./repl-string.js";
import { describe, expect, test } from "vitest";

describe.each([
  {
    input: "  hello  world  ",
    expected: ["hello", "world"],
  },
  {
    input: "  foo   BAR   baz  ",
    expected: ["foo", "bar", "baz"],
  },
  {
    input: "  abood  ",
    expected: ["abood"],
  },
  {
    input: "  ",
    expected: [],
  },
  {
    input: "*Singing* stArt shining right above yoU *sinGING*",
    expected: ["*singing*", "start", "shining", "right", "above", "you", "*singing*"],
  },
  {
    input: "*SINGING*        Birds        singing       in        the      sycamore        tree        *singing*     ",
    expected: ["*singing*", "birds", "singing", "in", "the", "sycamore", "tree", "*singing*"],
  }
  // TODO: more test cases here
])("cleanInput($input)", ({ input, expected }) => {
  test(`Expected: ${expected}`, () => {
    // TODO: call cleanInput with the input here
    const actual = cleanInput(input);


    // The `expect` and `toHaveLength` functions are from vitest
    // they will fail the test if the condition is not met
    expect(actual).toHaveLength(expected.length);
    for (const i in expected) {
      // likewise, the `toBe` function will fail the test if the values are not equal
      expect(actual[i]).toBe(expected[i]);
    }
  });
});