/**
 * 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 
 * 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, 
 * nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 
 * 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.
 */

function solution(nums) {
    let answer = 0;

    function checkPrime(sum) {
        for (let k = 2; k < sum/2; k++) {
            if(sum % k === 0) return false;
        }
        return true;
    }

    for (let i = 0; i < nums.length-2; i++) {
        for (let j = i+1; j < nums.length-1; j++) {
            for (let z = j+1; z < nums.length; z++) {
                let sum = nums[i] + nums[j] + nums[z];
                if(checkPrime(sum)) answer++;
            }
        }
    }
    return answer;
}

const case1 = [1,2,3,4];
const case2 = [1,2,7,6,4]; 

console.log(solution(case1)); // 1
console.log(solution(case2)); // 4