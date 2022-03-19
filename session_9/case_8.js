function solution(board){
    let answer = 0;
    let n = board.length;
    let dx = [0, 1, 1, 1, 0, -1, -1, -1];
    let dy = [1, 1, 0, -1, -1, -1, 0, 1];
    let queue = [];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if(board[i][j] === 1){
                board[i][j] = 0;
                queue.push([i, j]);
                answer++;
                while(queue.length){
                    let [x, y] = queue.shift();
                    for (let k = 0; k < dx.length; k++) {
                        let newX = x + dx[k];
                        let newY = y + dy[k];
                        if(newX >=0 && newX < n && newY >= 0 && newY < n){
                            if(board[newX][newY] === 1){
                                board[newX][newY] = 0;
                                queue.push([newX, newY]);
                            }
                        }
                    }
                }
            }   
        }
    }
    
    return answer;
}

let arr=[
    [1, 1, 0, 0, 0, 1, 0], 
    [0, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0]
];
console.log(solution(arr));
