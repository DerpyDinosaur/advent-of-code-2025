export default async function solution(puzzle: string[]): Promise<number> {
  let answer = 0;

  for (const line of puzzle) {
    let bank = line.split("").map(Number);
    let joltage: number = 0;

    let first: number = 0;
    let max_index: number = 0;
    for (let i = 0; i < bank.length; i++) {
      const value = bank[i]!;
      if (value > first) {
        first = value;
        max_index = i;
      }
    }

    let second: number = 0;
    if (max_index === bank.length - 1) {
      for (let i = 0; i < bank.slice(0, bank.length - 1).length; i++) {
        const value = bank[i]!;
        if (value > second) {
          second = value;
        }
      }

      joltage = second * 10 + first;
    } else {
      max_index++;
      for (let i = max_index; i < bank.length; i++) {
        const value = bank[i]!;
        if (value > second) {
          second = value;
        }
      }
      joltage = first * 10 + second;
    }
    answer += joltage;
  }

  return answer;
}
