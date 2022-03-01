function solution(array){
    let answer = flag = false;
    let n = array.length;
    let total = array.reduce((a,b)=>a+b,0);

    function DFS(level, sum){
        if(flag) return;
        if(level === n){
            if((total - sum) === total) {
                answer = true;
                flag = true;
            }
        } else {
            DFS(level+1, sum+array[level]);
            DFS(level+1, sum);
        }
    }
    DFS(0, 0);
    
    return answer;
}

let arr=[1, 3, 5, 6, 7, 10];
console.log(solution(arr));
// true
// {1, 3, 5, 7} = {6, 10} 