/*
순열 사이클 문제

맨 첫째 줄에 입력될 테스트케이스의 개수, 그 후 순열의 
 */

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
        const next = permutation[node - 1];
        if (!visited[next]) dfs(next);
    }

    for (let i = 1; i <= N; i++) {
        if (!visited[i]) {
            dfs(i);
            count++;
        }
    }

    result.push(count); // 현재 케이스 결과 저장
}

console.log(result.join("\n"));
