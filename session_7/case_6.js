function solution(array){
    let answer = [];
    let sortArr = array.slice();
    sortArr.sort((a,b) => {
        return a-b;
    })
    for (let i = 0; i < array.length; i++) {
        if(array[i] !== sortArr[i]) answer.push(i+1);
    }
    
    return answer;
}

let arr=[120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr)); // 3, 8

let arr2=[120, 130, 150, 150, 130, 150];
console.log(solution(arr2)); // 3, 5
