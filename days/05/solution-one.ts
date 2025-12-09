export default async function solution(puzzle: string[]): Promise<number> {
  const ranges = puzzle.filter((x) => x.includes("-"));
  const ingredients = puzzle.filter((x) => !x.includes("-") && x !== " ");
  const checklist = ingredients.reduce(
    (acc: { [key: string]: boolean }, id) => {
      acc[id] = false;
      return acc;
    },
    {},
  );

  for (const range of ranges) {
    const [first, last] = range.split("-").map(Number);
    if (!first || !last) continue;

    for (const id of ingredients) {
      if (checklist[id]) continue;
      const id_num = Number(id);

      if (id_num >= first && id_num <= last) {
        checklist[id] = true;
      }
    }
  }

  return Object.values(checklist).filter((x) => x === true).length;
}
