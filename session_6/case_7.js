function solution(a,b){
    let answer = false;
    let queue = a.split('');
    
    for (const value of b) {
        if(queue.indexOf(value) > -1 && queue[0] === value) queue.shift();
    }
    if(queue.length === 0) answer = true;

    return answer;
}

let a="CBA";
let b="CBDGEA";
console.log(solution(a, b)); //true