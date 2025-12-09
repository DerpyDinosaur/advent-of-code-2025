type LoadDataModes = "line" | "no-trim";

export async function load_data(path: string, mode: LoadDataModes = "line") {
  const file = Bun.file(path);
  const content = await file.text();

  let data;
  if (mode === "line") {
    data = content.trim().split(/\r?\n/);
  }

  if (mode === "no-trim") {
    data = content.split("\n").filter(Boolean);
  }

  if (!data) process.exit(0);

  return data;
}
