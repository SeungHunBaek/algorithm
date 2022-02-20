function solution(board, moves){
    let answer = 0;
    let selectedStack = [];
    for (let point = 0; point < moves.length; point++) {   
        for (let i = 0; i < board.length; i++) {
            if(board[i][moves[point]-1] !== 0) {
                let lastTarget = board[i][moves[point]-1];
                if(lastTarget === selectedStack.length-1) {
                    selectedStack.pop();
                    answer += 2;
                } else {
                    selectedStack.push(board[i][moves[point]-1]);
                }
                board[i][moves[point]-1] = 0;
                break;
            }
        }
    }
    return answer;
}
function solution2(board, moves){
    let answer=0;
    let stack=[];
    moves.forEach(pos => {
        for(let i=0; i<board.length; i++){
            if(board[i][pos-1]!==0){
                let tmp=board[i][pos-1];
                board[i][pos-1]=0;
                if(tmp===stack[stack.length-1]){
                    stack.pop();
                    answer+=2;
                }
                else stack.push(tmp);
                break;
            }
        }
    });
                    
    return answer;
}
let board=[
        [0,0,0,0,0],
        [0,0,1,0,3],
        [0,2,5,0,1],
        [4,2,4,4,2],
        [3,5,1,3,1]
    ];

let moves=[1, 5, 3, 5, 1, 2, 1, 4];
// 4 3 1 1 3 2 
console.log(solution(board, moves)); // 4

let board2=[
    [0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2],
    [3,5,1,3,1]
];
let moves2=[1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution2(board2, moves2)); // 4