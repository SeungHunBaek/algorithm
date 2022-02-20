function solution(str){
    let answer = 0;
    let stack = [];
    for (const value of str) {
        if(isNaN(value)) {
            let right = stack.pop(); 
            let left = stack.pop();
            if(value === '+') stack.push(left + right);
            else if(value === '-') stack.push(left - right);
            else if(value === '*') stack.push(left * right);
            else if(value === '/') stack.push(left / right);
        } else {
            stack.push(parseInt(value));
        }
    }
    answer = stack[0];
    return answer;
}

let str="352+*9-";
console.log(solution(str)); // 12