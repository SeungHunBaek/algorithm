function solution(meeting){
    let answer = 0;
    meeting.sort((a,b) => {
        if(a[1] === b[1]){
            return a[0] - b[0];
        } else {
            return a[1] - b[1]
        }
    });
    // console.log(meeting)
    let endTime = 0;
    for (const schedule of meeting) {
        if(schedule[0] >= endTime) {
            answer++;
            endTime = schedule[1];
        }
    }

    return answer;
}

let arr=[[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
console.log(solution(arr)); // 3 

let arr2=[[3, 3], [2, 3], [1, 3]];
console.log(solution(arr2)); // 2