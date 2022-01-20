function solution(number_arr){
    let answer = Math.min(...number_arr);
    return answer;
}

// console.log(solution(5, 3, 7, 11, 2, 15, 17)); // 2
console.log(solution([5, 3, 7, 11, 2, 15, 17]));　
