function solution(n){
    function DFS(number){
        if(number === 0) {
            return;
        }
        DFS(number-1)
        console.log(number);
    }
    DFS(n)
    
}

solution(3);
