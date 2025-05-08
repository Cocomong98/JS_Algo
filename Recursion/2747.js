export {};

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input1.txt";
const input = Number(fs.readFileSync(filePath).toString().trim().split("\n"));
if (input < 2) {
    console.log(input);
} else {
    const arr = [0, 1];
    let sum = 0;
    for (let i = 2; i <= input; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
        if (i === input) sum = arr[i];
    }
    console.log(sum);
}
