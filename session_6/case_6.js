function solution(n, k){
    let answer;
    let queue = Array.from({length:n}, (value, index) => {
        return index+1;
    });

    while(queue.length > 1){
        for (let i = 1; i < k; i++) {
            queue.push(queue.shift());
        }
        queue.shift();
    }
    answer = queue[0];
    return answer;
}
console.log(solution(8, 3)); // 7
