function solution(n, f){         
    let answer, flag = 0;
    let dy = Array.from(Array(11), () => Array(11).fill(0));
    let checkArray = Array.from({length: n+1}, () => 0);
    let permutation = Array.from({length: n}, () => 0);
    let combination_target = Array.from({length:n}, () => 0);

    function combination(n, r){
        if(dy[n][r] > 0) return dy[n][r];
        if(n===r || r===0) {
            return 1;
        } else {
            return dy[n][r]=combination(n-1, r-1) + combination(n-1, r);
        }
    }
    function DFS(L, sum){
        if(flag) return;
        if(L === n && sum === f){
            answer = permutation.slice();
            flag = 1;
        } else {
            for (let i = 1; i <= n; i++) {
                if(checkArray[i] === 0){
                    checkArray[i] = 1;
                    permutation[L] = i;
                    DFS(L+1, sum+(permutation[L]*combination_target[L]));
                    checkArray[i] = 0;
                }
            }
        }

    }
    for (let i=0; i<n; i++) {
        combination_target[i] = combination(n-1, i);
    }

    DFS(0,0)
    return answer;
}

console.log(solution(4, 16));