const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;

const input = fs.readFileSync(filePath).toString().trim().split("\n").map(BigInt);
const n = parseInt(input.shift(), 10);
for (let index = 0; index < n; index++) {
    const tc = input[index];
    let isAppropriate = true; // 적절한 암호 키인지 여부를 판단하는 변수

    // 1,000,000까지 반복하여 소인수가 있는지 검사
    for (let i = 2n; i <= 1000000n; i++) {
        if (tc % i === 0n) {
            console.log("NO");
            isAppropriate = false;
            break;
        }
    }
    if (isAppropriate) {
        console.log("YES");
    }
}
