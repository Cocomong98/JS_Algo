const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n");

const N = Number(input[0]);
const tree = Array.from({ length: N + 1 }, () => []);
const visited = new Array(N + 1).fill(false);
const parents = new Array(N + 1);

// 트리 구성
for (let i = 1; i < input.length; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    tree[a].push(b);
    tree[b].push(a);
}

// BFS 최적화
const queue = [1];
visited[1] = true;
let front = 0;

while (front < queue.length) {
    const node = queue[front++];
    for (const child of tree[node]) {
        if (!visited[child]) {
            visited[child] = true;
            parents[child] = node;
            queue.push(child);
        }
    }
}

console.log(parents.slice(2).join("\n"));
