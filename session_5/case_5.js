function solution(k, array){
    let answer = 0, rt =0;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        while(rt-i < k && rt < array.length){
            sum+=array[rt++];
        }
        answer = Math.max(answer, sum);
        sum-=array[i];
    }

    return answer;
}
let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a)); // 56