function solution(str, target){
    let answer = [];
    let standard = 1000;
    for (const value of str) {
        if(value === target) {
            standard = 0;
            answer.push(standard);
        } else {
            standard++;
            answer.push(standard);
        }
    }
    standard = 1000;
    for (let i = str.length-1; i >= 0; i--) {
        if(str[i] === target){
            standard = 0;
        } else if(answer[i] > standard){
            standard++;
            answer[i] = standard;
        }        
    }
    
    return answer;
}
let str="teachermode";
console.log(solution(str, 'e').join('') === '10121012210'); // 10121012210
