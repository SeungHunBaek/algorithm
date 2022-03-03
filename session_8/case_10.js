function solution(array, m){
    let answer = [];
    let n = array.length;
    let checkArr = Array.from({length: n}, () => 0);
    let tempArray = Array.from({length: m}, () => 0);
    
    function DFS(level){
        if(level === m){
            answer.push(tempArray.slice());
        } else {
            for (let i = 0; i < n; i++) {
                if(checkArr[i] === 0){
                    checkArr[i] = 1;
                    tempArray[level] = array[i];
                    DFS(level+1);
                    checkArr[i] = 0;
                }
            }
        }
    }
    DFS(0);
    
    return answer;
}

let arr=[3, 6, 9];
console.log(solution(arr, 2));
