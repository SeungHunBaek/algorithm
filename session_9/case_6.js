function solution(s, e){
    let answer;
    let distanceArray = Array.from({length: 10001}, () => 0);
    let checkArray = Array.from({length: 10001}, () => 0);
    let queue = [];
    // 기존에 도착한 이력이 있는가를 체크.
    checkArray[s] = 1;
    // 해당위치[s]에 몇번만에 도착했는가를 저장
    distanceArray[s] = 0;
    queue.push(s)
    
    while(queue.length){
        let x = queue.shift();
        for (const nx of [x-1, x+1, x+5]) {
            if(nx === e) {
                // 부모의 횟수보다 하나 증가
                answer = distanceArray[x] +1;
            } else {
                if(nx >= 0 && nx<=10000 && checkArray[nx] === 0){
                    checkArray[nx] = 1;
                    queue.push(nx);
                    distanceArray[nx] = distanceArray[x]+1; 
                }
            }
        }
    }
    
    return answer;
}

console.log(solution(5, 14));