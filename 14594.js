// 백준 14594 - 동방 프로젝트
/*
방이 N개 있다고 가정 -> walls 배열 선언 : true(안부서짐) / false(부서짐)의 2가지 상태를 갖게 됨
M번 작업이 반복되는 동안 i번째 방을 방문 
해당 작업 동안 해당되는 값을 모두 false처리 (부수기)
종료 후 true의 개수 세기 (부서지지 않은 것)
*/

// 입력받기
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 배열 안의 1, 2번째 줄 값을 가져오기
const N = Number(input.shift()); // 여기서 N은 방의 개수
const M = Number(input.shift());

// true = 부숴지지 않은 벽, false = 부숴진 벽
const walls = Array.from({ length: N }).fill(true);

// 반복문
// M번 동안 반복하는 반복문
for (let i = 0; i < M; i++) {
    // 매 i번째 (각각의 작업)에 대해서 시작점과 종료점
    const [start, end] = input[i].split(" ").map(Number);

    for (let j = start; j < end; j++) {
        walls[j] = false;
    }
}

// 결과 출력
console.log(walls.filter((el) => el === true).length);
