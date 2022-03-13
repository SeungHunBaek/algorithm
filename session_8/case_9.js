function solution(m, array){
    let answer = Number.MAX_SAFE_INTEGER;
    let n = array.length;


    function DFS(level, sum){
        // cut edge
        if(sum > m || level >= answer) return;
        if(sum === m){
            console.log(`level: ${level}, sum: ${sum}`)
            answer = Math.min(answer, level);
        } else {
            for (let i = 0; i < n; i++) {
                DFS(level + 1, sum+array[i]);
            }
        }
    }

    DFS(0, 0);
    
    return answer;
}

let arr=[1, 2, 5];
console.log(solution(15, arr));