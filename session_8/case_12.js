function solution(n, r){
    let answer;

    function DFS(n,r){
        if(n === r||r === 0){
            return 1;
        } else {
            return DFS(n-1, r-1) + DFS(n-1, r);
        }
    }

    answer = DFS(n,r);
    return answer;
}
function solution2(n, r){
    let answer;
    let dy = Array.from(Array(Math.max(n+2,r+2)), ()=>Array(Math.max(n+2,r+2)).fill(0));

    function DFS(n,r){
        if(dy[n][r] > 0) return dy[n][r];
        if(n === r||r === 0){
            return 1;
        } else {
            return dy[n][r] =DFS(n-1, r-1) + DFS(n-1, r);
        }
    }

    answer = DFS(n,r);
    return answer;
}


console.log(solution(5, 3)); // 10
console.log(solution(33, 19)); // 818809200

console.log(solution2(5, 3)); // 10
console.log(solution2(33, 19)); // 818809200
