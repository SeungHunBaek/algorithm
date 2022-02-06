function solution(str){
    let answer = '', cnt = 1;
    str+= ' ';
    for (let i = 0; i < str.length-1; i++) {

        if(str[i] === str[i+1]){
            cnt++;
            string = str[i];
        } else {
            answer+=`${str[i]}${cnt === 1 ? '': cnt}`;
            cnt = 1;
            string = '';
        }
    }
    return answer;
}

let str="KKHSSSSSSSE";
console.log(solution(str));