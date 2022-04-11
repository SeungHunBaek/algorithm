function solution(lottos, win_nums) {
    let answer = [];
    const rank = [6, 6, 5, 4, 3, 2, 1];
    let minCount = lottos.filter((value) => win_nums.includes(value) ).length;
    let maxCount = lottos.filter((value) => value === 0 ).length;

    answer = [rank[minCount+maxCount], rank[minCount]]
    return answer;
}

// function solution(lottos, win_nums) {
//     let answer = [];
//     let result = new Map();
//     result.set('win', 7);
//     result.set('hidden', 0);
//     for (const value of lottos) {
//         if(win_nums.indexOf(value) > -1) {
//             result.set('win', result.get('win')-1);
//         } else if(value === 0){
//             result.set('hidden', result.get('hidden')+1);
//         }
//     }
//     // console.log(`win: ${result.get('win')}, hidden: ${result.get('hidden')}`);

//     if(result.get('win') > 6){
//         if(result.get('hidden') < 1){
//             answer.push(6, 6);
//         } else {
//             answer.push(7 - result.get('hidden'), 6);
//         }
//     } else {
//         answer.push(result.get('win') - result.get('hidden'), result.get('win'));
//     }
    
//     return answer;
// }

let case1 = [[44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]] //[3, 5]
let case2 = [[0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]]	//[1, 6]
let case3 = [[20, 9, 3, 45, 4, 35], [20, 9, 3, 45, 4, 35]]	//[1, 1]
let case4 = [[38, 19, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]]//[1, 5]
let case5 = [[1, 2, 3, 4, 5, 6], [38, 19, 20, 40, 15, 25]]	//[6, 6]
let case6 = [[1, 2, 3, 4, 0, 20], [38, 19, 20, 40, 15, 25]]	//[5, 6]

console.log(`case1: ${solution(...case1)}`);
console.log(`case2: ${solution(...case2)}`);
console.log(`case3: ${solution(...case3)}`);
console.log(`case4: ${solution(...case4)}`);
console.log(`case5: ${solution(...case5)}`);
console.log(`case6: ${solution(...case6)}`);

