import { load_data } from 'lib';
import solution_one from './solution-one';
import solution_two from './solution-two';

const puzzle = await load_data(import.meta.dir + '/puzzle.txt');

const answer_one = await solution_one(puzzle);
const answer_two = await solution_two(puzzle);

console.log("Solution one:", answer_one);
console.log("Solution two:", answer_two);
