type Pos = {
  x: number;
  y: number;
}

export class Beam {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export function tui(grid: string[][]) {
  for (const line of grid) {
    console.log(line.join(''))
  }
  console.log()
}
