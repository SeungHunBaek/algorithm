function solution(numbers) {
    let answer = -1;
    let total = 45;
    let sum = numbers.reduce((element, current)=>{
        return current + element;
    },0)

    answer = total - sum;
    return answer;
}

console.log(solution([1,2,3,4,6,7,8,0]) === 14);
console.log(solution([5,8,4,0,6,7,9]) === 6);