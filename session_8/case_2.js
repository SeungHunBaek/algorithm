function solution(n){
    let answer = "";
    function DFS(number){
        if(number > 0){
            DFS(parseInt(number / 2));
            answer+=(number%2)
        }
    }
    DFS(n);
    return answer;
}

console.log(solution(11)); // 1011
