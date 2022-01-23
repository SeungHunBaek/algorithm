function solution(str, target){
    let answer=0;
    for (const value of str) {
        if(value === target) answer++; 
    }
    return answer;
}

console.log(solution('COMPUTERPROGRAMMING', 'R')) // 3
