function solution(str){
    let answer;
    // 짝수인경우
    if(str.length % 2 === 0) {
        answer = str.substr(Math.floor(str.length / 2), 2);
    // 홀수인경우
    } else {
        answer = str.substr(str.indexOf(Math.ceil(str.length / 2)),1);
    }
    return answer;
}

console.log(solution('study')) // u
console.log(solution('good')) // oo
