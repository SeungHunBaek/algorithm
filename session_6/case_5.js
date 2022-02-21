function solution(str){
    let answer=0;
    let stack=[];
    for (let i = 0; i < str.length; i++) {
        if(str[i] === '(') stack.push(str[i]);
        else {
            stack.pop();
            if(str[i-1]  === '(') answer += stack.length;
            else answer++;
        }
    }
    return answer;
}

function solution2(s){
    let answer=0;
    let stack=[];
    for(let i=0; i<s.length; i++){
        if(s[i]==='(') stack.push('(');
        else{
            stack.pop(); 
            if(s[i-1]==='(') answer+=stack.length;
            else answer++;
        }
    }        
    return answer;
}

let a="()(((()())(())()))(())";
console.log(solution(a)); // 17
console.log(solution2(a)); // 17