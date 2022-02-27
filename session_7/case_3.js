function solution(array){
    let answer = [];
    let positive =[];
    let nagative = [];
    for (const value of array) {
        if(value > 0 ) positive.push(value);
        else nagative.push(value);
    }
    answer = [...nagative, ...positive]
    return answer;
}

function solution2(array){
    let answer = array;
    for (let i = 0; i < array.length-1; i++) {
        for (let j = 0; j < array.length-i-1; j++) {
            if(array[j] > 0 && array[j+1] < 0) {
                [array[j], array[j+1]] = [array[j+1], array[j]];
            }
        }
    }
    return answer;
}

let arr=[1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr)); // -3 -2 -6 1 2 3 5 6
console.log(solution2(arr)); // -3 -2 -6 1 2 3 5 6