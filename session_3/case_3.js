function solution(str){
    let answer = parseInt(str.replace(/[^0-9]/g, ''));
    return answer;
}

console.log(solution('g0en2T0s8eSoft')); // 208