<<<<<<< HEAD
// 미로 제시
=======
// 미로 코드 제시
>>>>>>> 3b14c77bcb2ef1cfbbdf2a6769d873734bebdd91
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
