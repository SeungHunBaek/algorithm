function solution(s) {
    let answer = s;
    let enArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    for(const value of enArray){
        const regExp = new RegExp(value, 'g');
        answer = answer.replace(regExp, enArray.indexOf(value));
    }
    
    return parseInt(answer);
}

console.log(solution("one4seveneight") === 1478);
console.log(solution("23four5six7") === 234567);
console.log(solution("2three45sixseven") === 234567);
console.log(solution("123") === 123);
console.log(solution("oneone3") === 113);
