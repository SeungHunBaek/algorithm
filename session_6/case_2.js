function solution(str){
    let answer;
    let strArray = [];
    for (const value of str) {
        if(value !== ')') strArray.push(value);
        else if(value === ')') {
            while(strArray.pop() !== '(');
        };
    }
    answer = strArray.join('');
    return answer;
}

let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str)); // EFLM
