
// 미해결

// 시험은 최대 10,000 문제로 구성되어있습니다.
// 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
// 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.
function solution(answers) {
    let answer = [];
    const pattern = [
        [ 1, 2, 3, 4, 5 ],
        [ 2, 1, 2, 3, 2, 4, 2, 5 ],
        [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    let result = Array.from({length: pattern.length}, () => 0);

    for (let i = 0; i < pattern.length; i++) {
        for (let j = 0; j < answers.length; j++) {
            
            if(pattern[i][j] === answers[j]){
                result[i] = result[i] + 1;
            }
        }
    }
    // 갯수
    let maxScore = Math.max(...result);
    // 동점자
    let person = []; 

    result.map((value, index) => {
        if(maxScore === value) {
            person.push(index+1);
        }
    });
    answer = person.length > 1 ? person : [result.indexOf(maxScore)+1];
    
    return answer;
}

let answer1 = [1,2,3,4,5];
let answer2 = [1,3,2,4,2];
let answer4 = [0, 0, 0, 0, 0, 0, 2];

console.log(solution(answer1));
console.log(solution(answer2));
console.log(solution(answer4));