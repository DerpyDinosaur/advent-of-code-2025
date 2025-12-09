const CAPACITY = 12;

export default async function solution(puzzle: string[]): Promise<number> {
  let joltage = 0;

  for (const banks of puzzle) {
    const batteries = banks.split("").map(Number);
    const switched_on: number[] = [];
    let start = 0;

    for (let slot = 0; slot < CAPACITY; slot++) {
      const end = batteries.length - (CAPACITY - 1 - slot);

      let max = batteries[start]!;
      let max_index = start;

      for (let i = start + 1; i < end; i++) {
        if (batteries[i]! > max) {
          max = batteries[i]!;
          max_index = i;
        }
      }

      switched_on.push(max);
      start = max_index + 1;
    }

    joltage += parseInt(switched_on.join(""));
  }

  return joltage;
}
