import { parseArgs } from "util";
import { mkdir } from "node:fs/promises";
import { $ } from "bun";

const { values, positionals } = parseArgs({
  args: Bun.argv,
  options: {
    day: {
      type: "string",
    },
  },
  strict: true,
  allowPositionals: true,
});

if (!values.day){
    console.error("Script requires argument --day [number]")
    process.exit(0);
}

const package_json = {
  "name": values.day,
  "module": "index.ts",
  "type": "module",
  "private": true,
  "scripts": {
      "run": "bun run index.ts"
  },
  "devDependencies": {
    "@types/bun": "latest",
    "lib": "workspace:*"
  },
  "peerDependencies": {
    "typescript": "^5"
  }
}

const index_file = `import { load_data } from 'lib';
import solution_one from './solution-one';
import solution_two from './solution-two';

const puzzle = await load_data(import.meta.dir + '/puzzle.txt');

const answer_one = await solution_one(puzzle);
const answer_two = await solution_two(puzzle);

console.log("Solution one:", answer_one);
console.log("Solution two:", answer_two);
`;

const solution_file = `export default async function solution(puzzle: Unknown): Unknown {}`;

const test_file = `import { expect, test } from "bun:test";
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
});`;

const tsconfig = `{
  "extends": "../tsconfig.base.json",
}`

const path = `./days/${values.day}`;
await $`bun init ${path} -y`;
await Bun.write(path + '/package.json', JSON.stringify(package_json, null, 4));
await Bun.write(path + '/index.ts', index_file);
await Bun.write(path + '/index.test.ts', test_file);
await Bun.write(path + '/solution-one.ts', solution_file);
await Bun.write(path + '/solution-two.ts', solution_file);
await Bun.write(path + '/puzzle.txt', "");
await Bun.write(path + '/tsconfig.json', tsconfig);
