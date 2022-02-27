function solution(array){
    let answer = array;
    for (let i = 0; i < array.length-1; i++) {
        for (let j = 0; j < array.length-i-1; j++) {
            if(array[j] > array[j+1]) {
                [array[j], array[j+1]] = [array[j+1], array[j]];
            }
        }
    }

    return answer;
}

let arr=[13, 5, 11, 7, 23, 15];
console.log(solution(arr));