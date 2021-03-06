function solution(str1, str2){
    let answer = true;
    let strHM1 = new Map();
    let strHM2 = new Map();
    for (const value of str1) {
        if(strHM1.has(value)) strHM1.set(value, strHM1.get(value)+1);
        else strHM1.set(value, 1);
    }
    for (const value of str2) {
        if(strHM2.has(value)) strHM2.set(value, strHM2.get(value)+1);
        else strHM2.set(value, 1);
    }
    for (const [key, value] of strHM1) {
        // console.log(key, value, strHM2.get(key))
        if(value !== strHM2.get(key)) {
            answer = false;
            break;
        }
    }

    return answer;
}
function solution2(str1, str2){
    let answer = true;
    let strHM1 = new Map();

    for (const value of str1) {
        if(strHM1.has(value)) strHM1.set(value, strHM1.get(value)+1);
        else strHM1.set(value, 1);
    }

    for (const value of str2) {
        if(strHM1.has(value) && strHM1.get(value) !== 0) strHM1.set(value, strHM1.get(value)-1);
        else answer = false;
    }

    return answer;
}
function solution3(str1, str2){
    let answer = true;
    let strHM1 = new Map();
    let strHM2 = new Map();
    for (const value of str1) {
        if(strHM1.has(value)) strHM1.set(value, strHM1.get(value)+1);
        else strHM1.set(value, 1);
    }
    for (const value of str2) {
        if(strHM2.has(value)) strHM2.set(value, strHM2.get(value)+1);
        else strHM2.set(value, 1);
    }
    for (const [key, value] of strHM1) {
        // console.log(key, value, strHM2.get(key))
        if(!strHM2.has(key) || value !== strHM2.get(key)) return false
    }

    return answer;
}

let a="AbaAeCe";
let b="baeeACA";
console.log(solution(a, b)); // true
console.log(solution2(a, b)); // true
console.log(solution3(a, b)); // true