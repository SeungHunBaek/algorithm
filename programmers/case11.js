// function solution(n) {
//     let answer = '';
//     let decimal = '';
//     let tempNumber = n;

//     while(tempNumber > 2){
//         decimal = tempNumber % 3 + decimal ;
//         tempNumber = parseInt(tempNumber / 3);
//     }

//     let tempInt = tempNumber + decimal;
    
//     while(tempInt.indexOf('0') > -1){
//         tempInt = tempInt.replace('0', '4');
//         tempInt = parseInt(tempInt) - (Math.pow(10, tempInt.length-1)) + '';
//         tempInt = tempInt.replace('3', '2');
//     }

//     return answer = String(tempInt);
// }
function solution(n) {
    let answer = '';
    let numberArray = ['4', '1', '2'];

    while(n > 0) {
        answer = numberArray[n % 3] + answer;
        n = parseInt((n-1)/3);
    }
    
    return answer
}
function solution1(n) {
    var answer = '';
    const oneTwoFour = ['4','1','2']
    while (n>0){
        const remainder = n % 3
        answer = oneTwoFour[remainder] + answer;
        n = Math.floor((n-1)/3) 
        console.log(n, answer)
    }
    return answer;
}

console.log(solution(1) === "1");
console.log(solution(2) === "2");
console.log(solution(3) === "4");
console.log(solution(4) === "11");
console.log(solution(5) === "12");
console.log(solution(6) === "14");
console.log(solution(7) === "21");
console.log(solution(8) === "22");
console.log(solution(9) === "24");
console.log(solution(10) === "41");


// solution(1)
// solution(2)
// solution(3)
// solution(4)
// solution(5)
// solution(6);
// console.log('====')
// solution1(6);
// solution(7)
// solution(8)
// solution(9)
// solution(10)

