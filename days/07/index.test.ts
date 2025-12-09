import { expect, test } from "bun:test";
import solution_one from './solution-one';
import solution_two from './solution-two';

const sample;

test("Test solution one on sample", async () => {
  const result = await solution_one(sample);
  expect(result).toBe(true);
});

test("Test solution two on sample", async () => {
  const result = await solution_two(sample);
  expect(result).toBe(true)
});