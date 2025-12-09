import { expect, test } from "bun:test";
import solution_one from "./solution-one";
import solution_two from "./solution-two";

const sample = [
  "987654321111111",
  "811111111111119",
  "234234234234278",
  "818181911112111",
];

test("Test solution one on sample", async () => {
  const result = await solution_one(sample);
  expect(result).toBe(357);
});

test("Test solution two on sample", async () => {
  const result = await solution_two(sample);
  expect(result).toBe(3121910778619);
});
