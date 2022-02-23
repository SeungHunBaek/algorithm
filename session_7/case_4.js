function solution(array){
    let answer = array;
    for (let i = 0; i < array.length; i++) {
        let temp = array[i], j;
        for (j = i-1; j >= 0; j--) {
            if(array[j] > temp) array[j+1] = array[j];
            else break;        
        }
        array[j+1] = temp;
    }
    return answer;
}

let arr=[11, 7, 5, 6, 10, 9];
console.log(solution(arr));