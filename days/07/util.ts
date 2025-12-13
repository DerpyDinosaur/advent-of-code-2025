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

  update(x:number, y:number) {
    this.x = x;
    this.y = y;
  }
}

export class BeamManager {
  beams: Map<string, Beam>
  constructor() {
    this.beams = new Map<string, Beam>();
  }

  add(x: number, y: number) {
    const key = `${x},${y}`;
    if (!this.beams.has(key)) {
      this.beams.set(key, new Beam(x, y));
      return true;
    }
    return false;
  }

  update(x:number, y:number) {
    this.beams[`${x},${y}`] = this.beams[`${x},${y}`].update(x, y);
  }

  has(x: number, y: number) {
    return this.beams.has(`${x},${y}`);
  }

  remove(x: number, y: number) {
    return this.beams.delete(`${x},${y}`);
  }

  toArray() {
    return Array.from(this.beams.values());
  }
}

export function tui(grid: string[][]) {
  for (const line of grid) {
    console.log(line.join(''))
  }
  console.log()
}
