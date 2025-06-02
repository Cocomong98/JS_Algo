/*
순열 사이클 문제

 */

// 입력부
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 입력받은 숫자는 T로
const T = Number(input[0]);
// 인덱스는 1부터 시작
let index = 1;
// 정답배열
const result = [];

// 입력받은 숫자만큼 반복문 실행
for (let t = 0; t < T; t++) {
    const N = Number(input[index++]);
    const p = input[index++].split(" ").map(Number);
    const visited = new Array(N + 1).fill(false);
/* 
순열 사이클 개수 찾기 문제 해결 코드
- DFS를 사용해 방문하지 않은 노드 탐색 시 사이클 카운트 증가
*/

// 입력받기
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);

let index = 1;

const result = [];

for (let t = 0; t < T; t++) {
    const N = Number(input[index++]);

    const permutation = input[index++].split(" ").map(Number);

    const visited = new Array(N + 1).fill(false);

    let count = 0;

    function dfs(node) {
        visited[node] = true;
        const next = p[node - 1];
        const next = permutation[node - 1];
        if (!visited[next]) dfs(next);
    }

    for (let i = 1; i <= N; i++) {
        if (!visited[i]) {
            dfs(i);
            count++;
        }
    }

    result.push(count);
    result.push(count); // 현재 케이스 결과 저장
}

console.log(result.join("\n"));
