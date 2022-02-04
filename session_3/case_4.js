function solution(str, target){
    let answer = [];
    let splitStr = str.split('');
    let targetIndex = splitStr.indexOf(target);
    splitStr.forEach((element, index) => {

        let distance = Math.abs(index - targetIndex);
        answer.push(distance);
    });
    
    return answer;
}


function solution2(s, t){
    let answer=[];
    let p=1000;
    for(let x of s){
        if(x===t){
            p=0;
            answer.push(p);
        }
        else{
            p++;
            answer.push(p);
        }
    }
    p=1000;
    for(let i=s.length-1; i>=0; i--){
        if(s[i]===t) p=0;
        else{
            p++;
            answer[i]=Math.min(answer[i], p);
        }
    }
    return answer;
}
let str="teachermode";
console.log(solution(str, 'e')); // 10121012210
console.log(solution2(str, 'e'));