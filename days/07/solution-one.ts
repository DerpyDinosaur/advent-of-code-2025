import { Beam, tui } from "./util";

export default async function solution(puzzle: string[]) {
  let answer = 0;
  let width = puzzle[0].length;
  let height = puzzle.length;
  let beams: Beam[] = [new Beam(puzzle[0].indexOf("S"), 1)];
  let grid = puzzle.map((x) => x.split(""));
  let visual = new Array(...grid);

  for (let y = 1; y < height; y++) {
    beams.forEach((beam) => {
      visual[beam.y][beam.x] = "|";

      const down = beam.y + 1;
      const left = beam.x - 1;
      const right = beam.x + 1;
      if (grid[down] && grid[down][beam.x] === "^") {
        answer++;
        if (left >= 0 && grid[down][left] === ".") {
          visual[down][left] = "|";
          beam.x = left;
          beam.y = down;
        }

        if (right < width && grid[down][right] === ".") {
          visual[down][right] = "|";
          beams.push(new Beam(down, right));
        }

        // if (right < width && grid[down][right] === '.') {
        //   beams.push(new Beam(down, right))
        // }
        // visual[beam.y + 1][beam.x - 1] = "|";
        // visual[beam.y + 1][beam.x + 1] = "|";

        // if (left > 0 && gird[beam.y+1][left] !== "^") {
        //   beams.push(new Beam(down, left))
        // }

        // if (right < width - 1 && gird[beam.y+1][right] !== "^") {
        //   beams.push(new Beam(down, right))
        // }
      }

      if (grid[down] && grid[down][beam.x] === ".") {
        visual[down][beam.x] = "|";
        beam.y = down;
      }
    });

    tui(visual);
  }

  // for (let y = start.y; y < height; y++) {
  //   for (let x = start.x; x < width; x++) {
  //     // console.log(puzzle[y][x])
  //   }
  // }

  return answer;
}
