function solution(n){
    let answer = 0, max = Number.MIN_SAFE_INTEGER;

    n.forEach(element => {
        if(element > max) {
            max = element;
            answer++;
        }
    });
    return answer;
}

let arr=[130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr)); // 5