// 미로 코드 제시
let maze = [
    ["S", 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1],
    [0, 0, 0, 0, "E"],
    [1, 1, 1, 0, 1],
];

function dfs(maze, position = [0, 0], path = []) {
    let [x, y] = position;
    // 종점에 다다르면 해당 경로 리턴 (정답)
    if (maze[x][y] === "E") return [...path, position];

    // 상하좌우 이동
    let directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];
}
