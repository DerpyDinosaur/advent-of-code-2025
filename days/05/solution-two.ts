export default async function solution(puzzle: string[]): Promise<number> {
  const ranges: { first: number; last: number }[] = puzzle
    .filter((x) => x.includes("-"))
    .map((range) => {
      const [first = 0, last = 0] = range.split("-").map(Number);
      return { first, last };
    })
    .sort((a, b) => a.first - b.first);
  if (ranges.length === 0) return 0;

  let answer = 0;
  let start = ranges[0]!.first;
  let end = ranges[0]!.last;

  for (let i = 1; i < ranges.length; i++) {
    if (ranges[i]!.first <= end + 1) {
      end = Math.max(end, ranges[i]!.last);
    } else {
      answer += end - start + 1;
      start = ranges[i]!.first;
      end = ranges[i]!.last;
    }
  }
  answer += end - start + 1;

  return answer;
}
