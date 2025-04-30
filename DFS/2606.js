<<<<<<< HEAD
=======
// 늘보코치님 1주차 과제
// 백준 컴퓨터 바이러스 문제

>>>>>>> 3b14c77bcb2ef1cfbbdf2a6769d873734bebdd91
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

// readline으로 입력받기, input 배열에 저장
readline
    .on("line", function (line) {
        // 입력을 배열에 누적시킴
        // 띄어쓰기로 분리한 후 숫자로 변환해서 넣기
        input.push(...line.split(" ").map(Number));
    })

    // 이 위치부터 코드 짜기 시작
    .on("close", function () {
        // 정보를 담을 공간 선언
        const com = input[0]; // 컴퓨터
        const connect = input[1]; // 연결
        // 0부터 시작하는 인덱스 맞추기 위해 배열 크기에 1을 더해줌
        const adj = Array.from({ length: com + 1 }, () => []);

        // 정보 넣기
        for (let i = 0; i < connect; i++) {
            // 두 칸씩 떼는 이유 : 받은 배열에서 0,1번째에 해당하는 건 실제 연결을 뜻하는 정보가 아니기 때문
            // [2]부터 시작, (a,b) 쌍으로 주어지기 때문에 2씩 건너뛰어서 가져오기
            // adj 배열에 연결된걸 저장
            const a = input[2 + i * 2];
            const b = input[3 + i * 2];
            adj[a].push(b);
            adj[b].push(a);
        }
    });

// DFS로 탐색 : visited 배열 만들고 (방문한 것들), dfs 함수 정의하기 -> v 방문 후 미방문 시에 dfs를 재귀로 부름
const visited = new Array(n + 1).fill(false);
function dfs(v) {
    // 지금 단계에서 방문
    visited[v] = true;
    for (const neighbor of adj[v]) {
        // 아직 방문 전이라면 방문하기
        if (!visited[neighbor]) dfs(neighbor);
    }
}
dfs(1); // 1번 컴퓨터가 바이러스에 걸렸으니 1번부터 시작하기

// 감염된 숫자 계산하기 (여기서 애초에 바이러스가 걸린 1번은 제외함)
const count = visited.filter((v) => v).length - 1;
console.log(count);

process.exit();
