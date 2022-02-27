function cnt(array, midDistance) {
    let sum = 1;
    let endPoint = array[0];
    for (const value of array) {
        if(value - endPoint >= midDistance) {
            sum++;
            endPoint = value;
        }
    }
    return sum;
}

function solution(horse, array){
    let answer = 0;
    let leftPoint = 1;
    let rightPoint = Math.max(...array) - Math.min(...array);
    array.sort((a,b) => a-b);

    while(leftPoint <= rightPoint){
        let midDistance = parseInt((leftPoint + rightPoint) / 2);

        if(cnt(array, midDistance) >= horse){
            answer = midDistance;
            leftPoint = midDistance + 1;
        } else {
            rightPoint = midDistance - 1;
        }
    }

    return answer;
}

let arr=[1, 2, 8, 4, 9];
console.log(solution(3, arr));