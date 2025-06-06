<<<<<<< HEAD
// 그래프 제시
=======
>>>>>>> 3b14c77bcb2ef1cfbbdf2a6769d873734bebdd91
const graph = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A", "G", "H", "I"],
    D: ["B", "E", "F"],
    E: ["D"],
    F: ["D"],
    G: ["C"],
    H: ["C"],
    I: ["C", "J"],
    J: ["I"],
};

// graph 자료구조와 startNode를 입력
const DFS = (graph, startNode) => {
    const visited = []; // 탐색을 마친 노드들
    let needVisit = []; // 탐색해야할 노드들

    needVisit.push(startNode); // 노드 탐색 시작

    while (needVisit.length !== 0) {
        // 탐색해야할 노드가 남아있다면
        const node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용한다.
        if (!visited.includes(node)) {
            // 해당 노드가 탐색된 적 없다면
            visited.push(node);
            needVisit = [...graph[node], ...needVisit];
        }
    }
    return visited;
};

// DFS 출력
<<<<<<< HEAD
=======
// 방문한 순서대로 나올 것임
>>>>>>> 3b14c77bcb2ef1cfbbdf2a6769d873734bebdd91
console.log(DFS(graph, "A"));
