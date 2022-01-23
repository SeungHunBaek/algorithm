function solution(n){
    let answer = '';
    for (const value of n) {
        if(answer.length < value.length) {
            answer = value;
        }
    }
    return answer;
}

console.log(solution(['teacher', 'time',  'student', 'beautiful', 'good'])); // beautiful
