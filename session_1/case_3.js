function solution(n){
    let answer;
    // answer = parseInt(n/12) + (n%12 > 0 ? 1 :0);
    answer = Math.ceil(n/12);
    return answer;
}
console.log(solution(12)) // 1
console.log(solution(178)); // 15
console.log(solution(25)); //3