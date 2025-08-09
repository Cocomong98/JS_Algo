const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const fs = require("fs");
const inputLines = fs.readFileSync(filePath, "utf-8").trim().split("\n");
const [N, M] = inputLines[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);
const visited = Array(N + 1).fill(false);

for (let i = 1; i <= M; i++) {
    const [from, to] = inputLines[i].split(" ").map(Number);
    graph[from].push(to);
    graph[to].push(from);
}
// BFS
function bfs(start) {
    const queue = [start];
    visited[start] = true;
    while (queue.length > 0) {
        const current = queue.shift();
        for (const neighbor of graph[current]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        }
    }
}

let componentCount = 0;
for (let node = 1; node <= N; node++) {
    if (!visited[node]) {
        bfs(node);
        componentCount++;
    }
}

// 결과 출력
console.log(componentCount);
