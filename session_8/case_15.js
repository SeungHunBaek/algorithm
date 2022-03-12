function solution(array, multiple, n){
    let answer = 0;
    let printArray = Array.from({length:n}, ()=>0);

    function DFS(level, r){
        if(level === n){
            let sum = 0;
            for (let i = 0; i < printArray.length; i++) {
                sum+=printArray[i];
            }
            if(sum % multiple === 0){
                console.log(printArray, sum, sum % multiple)
                answer++;
            }
        } else {
            for (let i = r; i < array.length; i++) {
                printArray[level] = array[i];
                DFS(level+1, i+1);
            }
        }
    }
    DFS(0,0)

    return answer;
}

function solution2(n, k, arr, m){         
    let answer=0;
    function DFS(L, s, sum){
        if(L===k){
            if(sum%m===0) answer++;
        }
        else{
            for(let i=s; i<n; i++){
                DFS(L+1, i+1, sum+arr[i]);
            }
        }
    }
    
    DFS(0, 0, 0);
    return answer;
}


let arr=[2, 4, 5, 8, 12];
console.log(solution(arr, 6, 3));
console.log(solution2(5, 3, arr, 6));