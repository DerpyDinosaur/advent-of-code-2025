function has_pattern(pattern: string) {
  for (let i = 1; i < pattern.length; i++) {
    const split_pattern = pattern.split(pattern.slice(0, i));
    if (
      split_pattern.length > 2 &&
      split_pattern.every((v) => v === split_pattern[0])
    ) {
      return true;
    }
  }

  return false;
}

export default async function solution_two(puzzle: string[]) {
  let invalids: number[] = [];
  let data = puzzle[0] ? puzzle[0].split(",") : [];
  let ranges = data.map((v) => v.split("-").map((s) => parseInt(s)));

  for (const [first, last] of ranges) {
    if (!first || !last) break;
    let id = first;

    while (id < last + 1) {
      const id_string = String(id);

      if (!(id_string.length % 2)) {
        const mid = Math.floor(id_string.length / 2);
        const first_half = id_string.substring(0, mid);
        const second_half = id_string.substring(mid);

        if (
          (first_half[0] !== "0" || second_half[0] !== "0") &&
          first_half === second_half
        ) {
          invalids.push(id);
          id++;
          continue;
        }
      }

      if (has_pattern(id_string)) {
        invalids.push(id);
      }

      id++;
    }
  }

  return invalids.reduce((acc, value) => (acc += value), 0);
}
