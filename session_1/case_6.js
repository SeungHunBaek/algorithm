function solution(arr){
    let answer1 = 0, answer2;
    let odd =[];

    arr.map((value) => {
        if(value % 2 !== 0) {
            odd.push(value);
            answer1 += value;
        };
    });
    console.log(answer1);
    answer2 = Math.min(...odd);
    return answer2;
}
arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr)); // 256, 41