function solution(timeLimit, array){
    let answer=0;
    let dynamicTable = Array.from({length: timeLimit+1}, ()=>0);

    for (let i = 0; i < array.length; i++) {
        let score = array[i][0];
        let time = array[i][1];
        for (let j = timeLimit; j >= time; j--) {
            dynamicTable[j] = Math.max(dynamicTable[j], dynamicTable[j-time] + score);
        }
    }
    answer=dynamicTable[timeLimit];
    
    return answer;
}

// [점수, 시간]
let arr=[
    [10, 5], 
    [25, 12], 
    [15, 8], 
    [6, 3],
    [7, 4]
];
console.log(solution(20, arr)); // 41