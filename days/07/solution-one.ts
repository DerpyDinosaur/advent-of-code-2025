import { Beam, BeamManager, tui } from "./util";

export default async function solution(puzzle: string[]) {
  let answer = 0;
  let width = puzzle[0].length;
  let height = puzzle.length;
  // let beams: Beam[] = [new Beam(puzzle[0].indexOf("S"), 1)];
  let beams = new BeamManager();
  beams.add(puzzle[0].indexOf("S"), 1);
  // let grid = puzzle.map((x) => x.split(""));
  let visual = new Array(...puzzle.map((x) => x.split("")));
  visual[1][puzzle[0].indexOf("S")] = "|";

  for (let y = 1; y < height; y++) {
    for (const beam of beams.toArray()) {
      const down = beam.y + 1;
      const left = beam.x - 1;
      const right = beam.x + 1;

      if (visual[down] && visual[down][beam.x] === "^") {
        if (left >= 0 && visual[down][left] === ".") {
          answer++;
          visual[down][left] = "|";
          beam.update(left, down);
        }

        if (right < width && visual[down][right] === ".") {
          visual[down][right] = "|";
          if(beams.add(right, down)){
            answer++;
          }
        }
      }

      if (visual[down] && visual[down][beam.x] === ".") {
        visual[down][beam.x] = "|";
        beam.update(beam.x, down);
      }
    }

    tui(visual);
    // console.log(beams.toArray())
  }

  return answer;
}
