function solution(array){
    let answer = 0;
    let dynamicTable = Array.from({length: array.length}, () => 0);

    dynamicTable[0] = 1;
    for (let i = 1; i < array.length; i++) {
        let max = 0;
        for (let j = i-1; j >= 0; j--) {
            if(array[i] > array[j] && max < dynamicTable[j]){
                max = dynamicTable[j];
            }
        }
        dynamicTable[i] = max + 1;
        answer = Math.max(answer, dynamicTable[i]);
    }
    
    return answer;
}

let arr=[5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));