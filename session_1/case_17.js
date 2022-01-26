function solution(arr){
    let answer = [];
    // 1
    // for (let i = 0; i < arr.length; i++) {
        // if(i === arr.indexOf(arr[i])) {
        //     answer.push(arr[i]);
        // }
    // }

    // 2
    answer = arr.filter((value, index) => {
        if(index === arr.indexOf(value)) return true;
        else return false;
    });
    return answer;
}

console.log(solution(['time', 'good', 'good', 'time', 'student']));
