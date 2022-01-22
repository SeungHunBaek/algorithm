function solution(n){
    let answer = n;
    let sum = n.reduce((acc, value)=>{
        return acc + value;
    }, 0);

    for (let i = 0; i < n.length; i++) {
        for (let j = i+1; j < n.length; j++) {
            if(sum - (n[i]+n[j])===100) {
                n.splice(j, 1);
                n.splice(i, 1);

                // answer = n.filter((value) => {
                //     if(value === n[i] || value === n[j]){
                //         return false
                //     } else {
                //         return true
                //     }
                // });
            }
        }
    }
    
    return answer;
}
console.log([20, 7, 23, 19, 10, 15, 25, 8, 13])
console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13])); // 20 7 23 19 10 8 13
