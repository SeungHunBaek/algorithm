function solution(n, array){
    let answer = 0;
    let graph = Array.from(Array(n+1), () => Array(n+1).fill(0));
    let checkArray = Array.from({length:n+1}, () => 0);
    // 방향그래프 작성
    for (const [a, b] of array) {
        graph[a][b] = 1;
    }

    function DFS(v){
        if(v === n) {
            answer++;
        } else {
            for (let i = 1; i <= n; i++) {
                if(graph[v][i] === 1 && checkArray[i] === 0){
                    checkArray[i] = 1;
                    DFS(i);
                    checkArray[i] = 0;
                }
                
            }
        }
    }
    checkArray[1] = 1;
    DFS(1);
    return answer;
}

// 간선 정보
let arr=[[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(5, arr));