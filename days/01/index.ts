import { load_data } from "lib";

const data = (await load_data(import.meta.dir + "/input.txt")).filter(Boolean);

function parse_operation(value: string) {
    if (value.includes("L")) {
        return {
            isPositive: false as const,
            amount: Number(value.split("L")[1]),
        };
    }
    return { isPositive: true as const, amount: Number(value.split("R")[1]) };
}

// Variables
const MAX = 100;
const STARTING_POSITION = 50;
let position = STARTING_POSITION;
let zero_count = 0;

// Task 1
for (const operation of data) {
    const { isPositive, amount } = parse_operation(operation);

    if (isPositive) {
        position += amount;
    } else {
        position -= amount;
    }

    position = ((position % MAX) + MAX) % MAX;

    if (position === 0) {
        zero_count++;
    }
}
console.log("Task 1:", zero_count);

// Task 2
position = 50;
zero_count = 0;

for (const operation of data) {
    const { isPositive, amount } = parse_operation(operation);

    const distance_to_zero = isPositive
        ? MAX - position || MAX
        : position || MAX;

    if (amount >= distance_to_zero) {
        zero_count += 1 + Math.floor((amount - distance_to_zero) / MAX);
    }

    position = (position + (isPositive ? amount : -amount)) % MAX;
    if (position < 0) position += MAX;
}
console.log("Task 2:", zero_count);
