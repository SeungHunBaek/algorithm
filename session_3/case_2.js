function solution(str){
    let answer = 'YES';
    let lowerStr = str.toLowerCase();
    for (let i = 0; i < Math.floor(str.length/2); i++) {
        let asc = str[i].charCodeAt();
        if(asc < 97 || asc > 122 ) continue;
        else if(lowerStr[i] !== lowerStr.split('').reverse().join('')[i]) {
            return 'NO';
        }
    }
    return answer;
}
function solution2(str){
    let answer = 'YES';
    let lowerStr = str.toLowerCase().replace(/[^a-z]/g, "");
    if(lowerStr !== lowerStr.split('').reverse().join('')) return "NO";

    return answer;
}

let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str)); // YES
console.log(solution2(str)); // YES