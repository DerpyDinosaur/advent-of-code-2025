import type { Pos } from './util'
import { Direction, valid_coord, direction_coord } from "./util";

function accessible_hay(grid: string[][], position: Pos): boolean {
  let hay_count: number = 0;

  for (const dir in Direction) {
    if (!isNaN(Number(dir))) continue;
    const diff = direction_coord(Direction[dir]);

    let next: Pos = {
      x: position.x + diff.x,
      y: position.y + diff.y,
    };

    if (valid_coord(next.x, next.y, grid.length, grid.length)) {
      if (grid[next.y]![next.x] === "@"){
        hay_count++;
      }
      // console.log(dir)
      // console.log(grid[next.y]![next.x])
      // console.log("")
    }

    // console.log(diff.x, diff.y)
    // console.log(next.x, next.y)
    // console.log("")
  }

  return hay_count < 4;
}

export default async function solution(puzzle: string[]): Promise<number> {
  let answer = 0;
  const grid = puzzle.map(x => x.split('')) as string[][];

  for (let i = 0; i < 101; i++){
    for (let x = 0; x < grid.length; x++) {
      for (let y = 0; y < grid.length; y++) {
        if (grid[y][x] === "@" && accessible_hay(grid, {x, y})){
          answer++;
          grid[y][x] = "X"
        }
      }
    }
  }


  return answer
}
