export async function load_data(path: string, mode: 'line' = 'line') {
    const file = Bun.file(path);
    const content = await file.text();

    let data;
    if (mode === "line") {
        data = content.trim().split(/\r?\n/);
    }

    if (!data) process.exit(0);

    return data;
}
