function solution(str){
    let answer;
    answer = str.split(/[A-Z]/g).length -1;
    return answer;
}

console.log(solution('KoreaTimeGoodA'))
