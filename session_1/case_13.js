function solution(str){
    let answer = '';

    for (const value of str) {
        let asc = value.charCodeAt();
        // 대문자인 경우
        if(asc >= 65 && asc <= 90) {
            answer += value.toLowerCase();
        // 소문자인 경우
        } else if(asc >= 97 && asc <= 122) {
            answer += value.toUpperCase();
        }
    }
    return answer;
}

console.log(solution('StuDY')) // sTUdy
