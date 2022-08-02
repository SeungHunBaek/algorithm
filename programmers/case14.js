function solution(nums) {
    let answer = 0;
    let monster_map = new Map();
    
    nums.map((value) => {
        if(answer == nums.length/2) return answer;
        if(!monster_map.has(value)) {
            monster_map.set(value, 1);
            answer++;
        }
    });

    return answer;
}

const case1 = [3,1,2,3];
const case2 = [3,3,3,2,2,4];
const case3 = [3,3,3,2,2,2];

console.log(solution(case1)); // 2
console.log(solution(case2)); // 3
console.log(solution(case3)); // 2