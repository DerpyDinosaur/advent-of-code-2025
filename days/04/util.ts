export type Pos = {
    x: number;
    y: number;
}

export enum Direction {
  N,
  E,
  S,
  W,
  NE,
  SE,
  SW,
  NW,
}

export const direction_coord = (direction: Direction): Pos => {
  switch (direction) {
    case Direction.N:
      return { x: 0, y: -1 };
    case Direction.E:
      return { x: 1, y: 0 };
    case Direction.S:
      return { x: 0, y: 1 };
    case Direction.W:
      return { x: -1, y: 0 };
    case Direction.NE:
      return { x: 1, y: -1 };
    case Direction.SE:
      return { x: 1, y: 1 };
    case Direction.SW:
      return { x: -1, y: 1 };
    case Direction.NW:
      return { x: -1, y: -1 };
  }
}

export const valid_coord = (x:number, y:number, max_grid_x:number, max_grid_y:number) => {
  return (x >= 0 && x < max_grid_x && y >= 0 && y < max_grid_y);
}

export function accessible_hay(grid: string[][], position: Pos): boolean {
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
