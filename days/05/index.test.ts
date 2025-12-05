import { expect, test } from "bun:test";
import solution_one from './solution-one';
import solution_two from './solution-two';

const sample = [
  "3-5",
  "10-14",
  "16-20",
  "12-18",
  " ",
  "1",
  "5",
  "8",
  "11",
  "17",
  "32"
];

test("Test solution one on sample", async () => {
  const result = await solution_one(sample);
  expect(result).toBe(3);
});

test("Test solution two on sample", async () => {
  const result = await solution_two(sample);
  expect(result).toBe(14)
});
