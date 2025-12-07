import { expect, test } from "bun:test";
import solution_one from './solution-one';
import solution_two from './solution-two';

const sample = [
    "123 328  51 64 ",
    " 45 64  387 23",
    "  6 98  215 314",
    "*   +   *   +  "
];

test("Test solution one on sample", async () => {
  const result = await solution_one(sample);
  expect(result).toBe(4277556);
});

test("Test solution two on sample", async () => {
  const result = await solution_two(sample);
  expect(result).toBe(3263827)
});
