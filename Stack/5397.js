const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

/*
백준 5397 - 키로거
*/

const T = input.shift();
for (let i = 0; i < T; i++) {
    password(input[i].split(""));
}

function password(str) {
    let answer = [];
    let idx = 0;
    str.forEach((kp) => {
        // console.log('현재 입력', kp);
        // console.log('현재 커서위치', idx);
        if (kp == "-") {
            answer.splice(idx - 1, 1);
        } else if (kp == ">") {
            idx == answer.length || idx++;
        } else if (kp == "<") {
            idx == 0 || idx--;
        } else {
            answer.splice(idx, 0, kp);
            idx++;
            // console.log(answer);
        }
    });
    console.log(answer.join(""));
}
