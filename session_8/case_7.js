function solution(maxTime, score, time){
    let answer = 0;
    let n = time.length;

    function DFS(Level, sumScore, sumTime) {
        if(sumTime > maxTime) return;
        if(Level === n){
            answer = Math.max(sumScore, answer);
        } else {
            DFS(Level+1, (sumScore + score[Level]), sumTime + time[Level]);
            DFS(Level+1, sumScore, sumTime);
        }
    }
    DFS(0,0,0);
    return answer;
}

let time=[10, 25, 15, 6, 7];
let score=[5, 12, 8, 3, 4]
console.log(solution(20, time, score));