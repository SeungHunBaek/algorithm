function solution(max, array){
    let answer = Number.MIN_SAFE_INTEGER;
    let n = array.length;

    function DFS(level, sum){
        if(sum > max) return
        if(level === n){
            answer = Math.max(sum, answer);
        }else {
            DFS(level+1, sum+array[level]);
            DFS(level+1, sum);
        }
    }
    DFS(0,0);
    
    return answer;
}


let arr=[81, 58, 42, 33, 61];
console.log(solution(259, arr));
