function solution(board, moves) {
    let answer = 0;
    let stack = [];
    
    moves.map(value => {
        for (let i = 0; i < board.length; i++) {
            if(board[i][value-1] > 0){
                let target = board[i][value-1];
                board[i][value-1] = 0;
                
                console.log(`target: ${target}, value: ${value}, stack: ${stack[stack.length-1]}`);
                if(target === stack[stack.length-1]){
                    stack.pop();
                    answer+=2;
                } else {
                    stack.push(target);
                }
                break;
            }
        }
    });

    return answer;
}

let board = [
    [0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2],
    [3,5,1,3,1]
];

let moves = [1,5,3,5,1,2,1,4]

console.log(solution(board, moves)) // 4