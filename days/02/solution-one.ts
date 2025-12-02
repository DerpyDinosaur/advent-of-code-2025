export default async function task_one(puzzle: string[]): Promise<number> {
  let answer: number
  let invalids: number[] = [];
  let data = puzzle[0] ? puzzle[0].split(',') : [];
  let ranges = data
    .map(v =>
      v.split('-').map(s => parseInt(s))
    );

  for(const [first, last] of ranges){
    if (!first || !last) break;
    let id = first;

    while (id < last+1){
      const id_string = String(id);
      if (!(id_string.length % 2)) {
        const mid = Math.floor(id_string.length / 2);
        const first_half = id_string.substring(0, mid);
        const second_half = id_string.substring(mid);

        if ((first_half[0] !== '0' || second_half[0] !== '0') && first_half === second_half){
          invalids.push(id);
        }
      }
      id++;
    }
  }

  return invalids.reduce((acc, value) => acc += value, 0)
}
