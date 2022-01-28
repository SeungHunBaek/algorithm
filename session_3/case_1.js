function solution(str){
    let answer = "YES";
    let originalStr = str.toLowerCase();
    for (let i = 0; i < parseInt(str.length/2); i++) {
        if(originalStr[i] !== originalStr[str.length-1-i]) answer = "NO";   
    }
    return answer;
}
function solution2(str){
    let answer = "YES";
    let lowerStr = str.toLowerCase();

    if(lowerStr !== lowerStr.split('').reverse().join('')) return "NO"
    
    return answer;
}

console.log(solution('gooG')); // YES
console.log(solution('goGo')); // NO
console.log(solution('goioG')); // YES

console.log(solution2('gooG')); // YES
console.log(solution2('goGo')); // NO
console.log(solution2('goioG')); // YES
