function solution(a,b){
    let answer = false;
    let queue = a.split('');
    
    for (const value of b) {
        if(queue.indexOf(value) > -1 && queue[0] === value) queue.shift();
    }
    if(queue.length === 0) answer = true;

    return answer;
}

function solution2(need, plan){
    let answer=true;
    let queue=need.split('');
    for(let x of plan){
        if(queue.includes(x)){
            if(x!==queue.shift()) return false;
        }
    }
    if(queue.length>0) return false;  
    return answer;
}

let a="CBA";
let b="CBDGEA";
let b2="CBDGE";
console.log(solution(a, b)); //true
console.log(solution(a, b2)); //false
console.log(solution2(a, b)); //true
console.log(solution2(a, b2)); //false