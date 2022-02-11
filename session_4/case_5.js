function solution(n, array){
    let answer, tempArr = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(i === j) continue;
            for (let k = 0; k < array.length; k++) {
                if(j === k || k ===i) continue;
                tempArr.push(arr[i] + arr[j] + arr[k]);
            }
        }
    }
    tempArr = new Set(tempArr);
    answer = [...tempArr].sort((a, b) => {
        return b-a;
    })[n-1];
    
    return answer;
}
let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(3, arr)); // 143
