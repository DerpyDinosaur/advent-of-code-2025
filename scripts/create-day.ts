import { parseArgs } from "util";
import { mkdir } from "node:fs/promises";
import { $ } from "bun";

const { values, positionals } = parseArgs({
  args: Bun.argv,
  options: {
    day: {
      type: "string",
    },
  },
  strict: true,
  allowPositionals: true,
});

if (!values.day){
    console.error("Script requires argument --day [number]")
    process.exit(0);
}

const package_json = {
  "name": values.day,
  "module": "index.ts",
  "type": "module",
  "private": true,
  "scripts": {
      "run": "bun run index.ts"
  },
  "devDependencies": {
    "@types/bun": "latest",
    "lib": "workspace:*"
  },
  "peerDependencies": {
    "typescript": "^5"
  }
}

const path = `./days/${values.day}`;
await $`bun init ${path} -y`;
await Bun.write(path + '/package.json', JSON.stringify(package_json, null, 4));
await Bun.write(path + '/task-1.ts', '');
await Bun.write(path + '/task-2.ts', '');
await Bun.write(path + '/task-1.test.ts', '');
await Bun.write(path + '/task-2.test.ts', '');
