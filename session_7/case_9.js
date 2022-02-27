function solution(schedule){
    let answer = 0;
    let timeLine = [];

    for (const value of schedule) {
        timeLine.push([value[0], 's']);
        timeLine.push([value[1], 'e']);
    }

    timeLine.sort((a,b) => {
        if(a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
        else return a[0] - b[0];
    });
    let cnt = 0;
    for (const time of timeLine) {
        if(time[1] === 's') cnt++;
        else cnt--;

        answer = Math.max(answer, cnt);
    }
    return answer;
}

let arr=[[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]];
console.log(solution(arr));