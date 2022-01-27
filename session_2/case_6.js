function solution(n){
    let answer=sum1=sum2=0;
    for (let i = 0; i < n.length; i++) {
        sum1=sum2=0;
        for (let j = 0; j < n.length; j++) {
            sum1 += n[i][j];
            sum2 += n[j][i];
        }
        answer = Math.max(answer, sum1, sum2);
    }

    sum1=sum2=0;

    for (let i = 0; i < n.length; i++) {
        sum1 += n[i][i];
        sum2 += n[i][n.length-1-i];
    }

    answer = Math.max(answer, sum1, sum2);
    return answer;
}

let arr=[
         [10, 13, 10, 12, 15], 
         [12, 39, 30, 23, 11],
         [11, 25, 50, 53, 15],
         [19, 27, 29, 37, 27],
         [19, 13, 30, 13, 19]
        ];
console.log(solution(arr)) // 155