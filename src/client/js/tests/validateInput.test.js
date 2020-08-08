const { TestScheduler } = require("jest");

import { validateInput } from "../validateInput";

test("validate input where input is undefined", () => {
  const result = validateInput(undefined);
  expect(result).toBe(false);
});

test("validate input where input is null", () => {
  const result = validateInput(null);
  expect(result).toBe(false);
});

test("validate input where input is of length 0", () => {
  const result = validateInput("");
  expect(result).toBe(false);
});

test("validate input where input is of length more than 5000", () => {
  let input = "";
  for (let i = 1; i <= 5001; i++) {
    input = `${input}A`;
  }
  const result = validateInput(input);
  expect(result).toBe(false);
});

test("validate input where input is of length 4999", () => {
  let input = "";
  for (let i = 1; i <= 4999; i++) {
    input = `${input}A`;
  }
  const result = validateInput(input);
  expect(result).toBe(true);
});

test("validate input where input is of length 5000", () => {
  let input = "";
  for (let i = 1; i <= 5000; i++) {
    input = `${input}A`;
  }
  const result = validateInput(input);
  expect(result).toBe(true);
});

test("validate input where input is of arbitary length typical of a sentence length", () => {
  const input =
    "The boy made his way along the narrow, rickety bridge. Reaching the other side of the town was sometimes difficult, especially in a high wind.";
  const result = validateInput(input);
  expect(result).toBe(true);
});
