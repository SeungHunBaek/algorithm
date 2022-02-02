function solution(n){
    let answer=0, cnt=0;
    for (let i = 0; i < n.length; i++) {
        if(n[i]===1){
            cnt++;
        } else {
            cnt=0
        }
        answer+=cnt;
    }
    return answer;
}

console.log(solution([1,0,1,1,1,0,0,1,1,0]));
