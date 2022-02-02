function solution(n){
    let answer = [];
    for (let i = 0; i < n.length; i++) {
        let cnt = 1;
        for (let j = 0; j < n.length; j++) {
            if(n[i] < n[j]) cnt++;
        }
        answer.push(cnt);
    }
    return answer;
}

function solution2(n){
    let answer = Array.from({length: n.length}, ()=>1);
    for (let i = 0; i < n.length; i++) {
        for (let j = 0; j < n.length; j++) {
            if(n[i] < n[j]) answer[i]++;
        }
    }
    return answer;
}

console.log(solution([87, 89, 92, 100, 76])); // 43215
console.log(solution([87, 89, 92, 100, 76, 76, 11])); // 4321557
console.log(solution2([87, 89, 92, 100, 76])); // 43215
console.log(solution2([87, 89, 92, 100, 76, 76, 11])); // 4321557
