function solution(n){
    let answer = true;
    let strArray = n.split('');
    let strStack = [];
    for (let i = 0; i < strArray.length; i++) {
        if(strArray[i] === '(') strStack.push(strArray[i]);
        else if(strStack.pop() !== '(') {
            return false; 
        }
    }
    
    if(strStack.length !== 0) return false;
    return answer;
}
// 검증용
function solution2(s){
    let answer=true;
    stack=[];
    for(let x of s){
        if(x==='(') stack.push(x);
        else{
            if(stack.length===0) return false;
            stack.pop();
        }
    }
    if(stack.length>0) return false;  
    return answer;
}


// let a="(()(()))(()";
// let a="(()()))";
let a="(())(()";
console.log(solution(a)); // false
console.log(solution2(a)); // false