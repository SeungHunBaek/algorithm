function solution(n){
    let answer=[];
    for (let i = 0; i < n.length; i++) {
        if(i === 0) answer.push(n[i]); 
        else if(n[i] < n[i+1]) answer.push(n[i+1]);
    }
    return answer;
}

let arr=[7, 3, 9, 5, 6, 12];
console.log(solution(arr)); // 7 9 6 12
