function solution(n){
    let answer = [];
    let checkArray = Array.from({length:n+1}, () => 0);

    function DFS(v){
        if(v === n+1){
            let tempString = '';
            for (let i = 1; i <= n; i++) {
                if(checkArray[i] === 1){
                    tempString+=i;
                }                
            }
            if(tempString.length > 0){
                answer.push(tempString.trim());
            } 
        } else {
            checkArray[v] = 1;
            DFS(v+1);
            checkArray[v] = 0;
            DFS(v+1);
        }
    }
    DFS(1);
    return answer;
}
console.log(solution(3));

// 123
// 12
// 13
// 1 23 2
// 3