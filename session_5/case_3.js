function solution(targetSum, arr){
    let answer = 0;
    let n = arr.length;
    let p1 = p2 = 0;
    let sum = 0;

    while(p2 < n){
        sum+=arr[p2++];
        if(sum === targetSum) {
            answer++;
        }
        while(sum >= targetSum){
            sum-=arr[p1++];
            if(sum === targetSum) {
                answer++;
            }
        }
    }
    return answer;
}
let a=[1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a)); // 3
// 1~3, 2~5, 3~6