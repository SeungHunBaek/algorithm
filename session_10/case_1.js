function solution(n){
    let answer=0;
    let dynamicArray = Array.from({length:n}, ()=>0);
    dynamicArray[1] = 1;
    dynamicArray[2] = 2;

    for (let i = 3; i <= n; i++) {
        dynamicArray[i] = dynamicArray[i-1] + dynamicArray[i-2];
    }
    answer = dynamicArray[n];
    
    return answer;
}
console.log(solution(7));
