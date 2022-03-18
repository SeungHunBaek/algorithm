function solution(board){  
    let answer = 0;
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];
    function DFS(x, y){
        if(x === 6 && y === 6){
            answer++;
        } else {
            for (let k = 0; k < 4; k++) {
                let nextX = x + dx[k];
                let nextY = y + dy[k];
                if(nextX < 7 && nextX > -1 && nextY > -1&& nextY < 7){
                    if(board[nextX][nextY] === 0){
                        board[nextX][nextY] = 1;
                        DFS(nextX, nextY);
                        board[nextX][nextY] = 0;
                    }
                }
            }
        } 
    }
    board[0][0] = 1;
    DFS(0,0)
    
    return answer; 
}

let arr=[
        [0, 0, 0, 0, 0, 0, 0], 
        [0, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [1, 1, 0, 1, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1],
        [1, 1, 0, 1, 1, 0, 0],
        [1, 0, 0, 0, 0, 0, 0]
];

console.log(solution(arr));