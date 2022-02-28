function solution_preOrder(n){
    let answer="";
    
    function DFS(v){
        if(v > 7) {
            return;
        } else {
            answer+=v;
            DFS(v*2);
            DFS(v*2+1);
        }
    }
    
    DFS(n);
    return answer;
}
function solution_inOrder(n){
    let answer="";
    
    function DFS(v){
        if(v > 7) {
            return;
        } else {
            DFS(v*2);
            answer+=v;
            DFS(v*2+1);
        }
    }
    
    DFS(n);
    return answer;
}
function solution_postOrder(n){
    let answer="";
    
    function DFS(v){
        if(v > 7) {
            return;
        } else {
            DFS(v*2);
            DFS(v*2+1);
            answer+=v;
        }
    }
    
    DFS(n);
    return answer;
}
console.log(solution_preOrder(1)); // 1245367
console.log(solution_inOrder(1)); // 4251637
console.log(solution_postOrder(1)); //4526731