function countCd(recode, minute) {
    let sum = 0;
    let cdCnt = 1;
    for (const value of recode) {
        if(sum + value <= minute){
            sum+=value;
        } else {
            cdCnt++;
            sum = value;
        }
    }
    return cdCnt;
}

function solution(recode, cd){
    let answer = 0;;
    let leftPoint = Math.max(...recode)
    let rightPoint = recode.reduce((value, current, index) => {
        return value + current;
    }, 0);

    while(leftPoint <= rightPoint) {
        let minute = parseInt((leftPoint + rightPoint) / 2);
        console.log(leftPoint, minute, rightPoint)
        if(countCd(recode, minute) <= cd){
            answer = minute;
            rightPoint = minute-1;
        } else {
            leftPoint = minute+1;
        }
    }
    return answer;
}

let recode =[1,2,3,4,5,6,7,8,9];
console.log(solution(recode, 3))
