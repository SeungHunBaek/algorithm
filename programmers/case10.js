function solution(a, b) {
    let answer = 0;
    answer = a.reduce((acc, current, i) => acc + (current * b[i]), 0);
    return answer;
}

console.log(solution([1,2,3,4],[-3,-1,0,2]) === 3);
console.log(solution([-1,0,1],[1,0,-1]) === -2);

