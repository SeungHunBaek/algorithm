function solution(n, r){
    let answer=[];
    let printArray = Array.from({length: r}, ()=>0);

    function DFS(Level, ri){
        
        if(Level === r){
            answer.push(printArray.slice());
        } else {
            for (let i = ri; i <= n; i++) {
                printArray[Level] = i;
                DFS(Level+1, i+1);
            }
        }
    }

    DFS(0, 1);
    
    return answer;
}

let arr=[];
console.log(solution(4, 2)); // [ [ 1, 2 ], [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ], [ 3, 4 ] ]
