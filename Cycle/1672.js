// 입력부
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
// 받은 배열을 dna에 저장
const dna = input[1].trim();

// 문제에 있는 테이블 그대로
const decodeTable = [
    ["A", "C", "A", "G"],
    ["C", "G", "T", "A"],
    ["A", "T", "C", "G"],
    ["G", "A", "G", "T"],
];

// 문제에 있는 테이블 순서
const cindex = (c) => {
    switch (c) {
        case "A":
            return 0;
        case "G":
            return 1;
        case "C":
            return 2;
        case "T":
            return 3;
    }
};

// 맨 마지막 문자부터 시작
let result = dna[dna.length - 1];

for (let i = dna.length - 2; i >= 0; i--) {
    // 현재 위치 문자
    const cchar = dna[i];
    const row = cindex(cchar);
    const col = cindex(result);
    // 새로 저장될 문자 (앞선 row, col) 활용
    result = decodeTable[row][col];
}

console.log(result);
