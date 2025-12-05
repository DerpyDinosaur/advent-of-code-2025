import { accessible_hay } from "./util";

export default async function solution(puzzle: string[]): Promise<number> {
  let answer = 0;
  const grid = puzzle.map(x => x.split('')) as string[][];

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid.length; y++) {
      if (grid[y]![x] === "@" && accessible_hay(grid, {x, y})){
        answer++;
      }
    }
  }

  return answer
}
