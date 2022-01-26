function solution(date, number){
    let answer = [];
    let targetDate = date%10;
    number.map((value, index) => {
        if(value%10 === targetDate){
            answer.push(value);
        }
    });
    
    return answer.length;
}

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33])); // 3
console.log(solution(13, [25, 23, 11, 47, 53, 17, 33])); // 3 
console.log(solution(0, [12, 20, 54, 30, 87, 91, 30])); // 3

