function solution(n){
    let answer = 0;
    let dynamicArray = Array.from({length: n}, () => 0);

    dynamicArray[1] = 1;
    dynamicArray[2] = 2;

    for (let i = 3; i <= n+1; i++) {
        dynamicArray[i] = dynamicArray[i-1] + dynamicArray[i-2];
    }
    
    return answer = dynamicArray[n+1];
}

console.log(solution(7));
