function solution(A, B){
    let answer = [];
    for (let i = 0; i < A.length; i++) {
        if(A[i] - B[i] === 1 || A[i] - B[i] === -2) answer.push('A');
        else if(A[i] - B[i] === -1 || A[i] - B[i] === 2) answer.push('B');
        else answer.push('D');
    }
    return answer;
}

const A = [2,3,3,1,3];
const B = [1,1,2,2,3];
 
console.log(...solution(A, B));
