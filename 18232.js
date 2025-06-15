// 입력부
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    // 입력 파싱
    const [N, M] = input[0].split(" ").map(Number);
    const [S, E] = input[1].split(" ").map(Number);
    const teleport = Array.from({ length: N + 1 }, () => []);
    for (let i = 2; i < 2 + M; i++) {
        const [x, y] = input[i].split(" ").map(Number);
        teleport[x].push(y);
        teleport[y].push(x);
    }

    // BFS
    const visited = Array(N + 1).fill(false);
    const queue = [];
    queue.push([S, 0]);
    visited[S] = true;

    while (queue.length) {
        const [pos, time] = queue.shift();
        if (pos === E) {
            console.log(time);
            return;
        }
        // 이동: -1
        if (pos > 1 && !visited[pos - 1]) {
            visited[pos - 1] = true;
            queue.push([pos - 1, time + 1]);
        }
        // 이동: +1
        if (pos < N && !visited[pos + 1]) {
            visited[pos + 1] = true;
            queue.push([pos + 1, time + 1]);
        }
        // 텔레포트
        for (const next of teleport[pos]) {
            if (!visited[next]) {
                visited[next] = true;
                queue.push([next, time + 1]);
            }
        }
    }
});
