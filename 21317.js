/*
S1 - 징검다리 건너기

심마니 영재는 산삼을 찾아다닌다.
산삼을 찾던 영재는 N개의 돌이 일렬로 나열되어 있는 강가를 발견했고, 마지막 돌 틈 사이에 산삼이 있다는 사실을 알게 되었다.
마지막 돌 틈 사이에 있는 산삼을 캐기 위해 영재는 돌과 돌 사이를 점프하면서 이동하며 점프의 종류는 3가지가 있다.
점프의 종류에는 현재 위치에서 다음 돌로 이동하는 작은 점프, 1개의 돌을 건너뛰어 이동하는 큰 점프, 2개의 돌을 건너뛰어 이동하는 매우 큰 점프가 있다.
각 점프를 할 때는 에너지를 소비하는데, 이 때 작은 점프와 큰 점프시 소비되는 에너지는 점프를 하는 돌의 번호마다 다르다.
매우 큰 점프는 단 한 번의 기회가 주어지는데, 이때는 점프를 하는 돌의 번호와 상관없이 k만큼의 에너지를 소비한다.
에너지를 최대한 아껴야 하는 영재가 산삼을 얻기 위해 필요한 에너지의 최솟값을 구하여라.
영재는 첫 번째 돌에서부터 출발한다.
*/

// 입력부
/*
첫 번째 줄에는 돌의 개수 N이 주어진다.
N - 1개의 줄에 걸쳐서, 1번 돌부터 N - 1번 돌 까지의 작은 점프를 하기 위해 필요한 에너지, 큰 점프를 하기 위해 필요한 에너지가 주어진다.
마지막 줄에는 K가 주어진다.
 */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const small = [];
const big = [];

// 코드
for (let i = 1; i < N; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    small.push(a);
    big.push(b);
}
const K = Number(input[N]);

const MAX = 99999999;
const dp = Array.from({ length: N }, () => [MAX, MAX]);
dp[0][0] = 0; //

for (let i = 0; i < N; i++) {
    // 작은 점프
    if (i + 1 < N) {
        dp[i + 1][0] = Math.min(dp[i + 1][0], dp[i][0] + small[i]);
        dp[i + 1][1] = Math.min(dp[i + 1][1], dp[i][1] + small[i]);
    }
    // 큰 점프
    if (i + 2 < N) {
        dp[i + 2][0] = Math.min(dp[i + 2][0], dp[i][0] + big[i]);
        dp[i + 2][1] = Math.min(dp[i + 2][1], dp[i][1] + big[i]);
    }
    // 매우 큰 점프 (한 번만)
    if (i + 3 < N && dp[i][0] !== MAX) {
        dp[i + 3][1] = Math.min(dp[i + 3][1], dp[i][0] + K);
    }
}

console.log(Math.min(dp[N - 1][0], dp[N - 1][1]));
