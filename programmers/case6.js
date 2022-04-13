function solution(numbers, hand, result) {
    var answer = '';
    let pad = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        ['x',0,'x']
    ];
    let leftTarget = [1,4,7];
    let rightTarget = [3,6,9];
    let leftPosition = [[3],[0]];
    let rightPosition = [[3],[2]];
    let targetPosition = [];

    for (const value of numbers) {
        for (let i = 0; i < pad.length; i++) {
            for (let j = 0; j < pad[0].length; j++) {
                if(value === pad[i][j]){
                    targetPosition = [[i],[j]];
                    if(leftTarget.indexOf(value) > -1){
                        answer+='L';
                        leftPosition = targetPosition;

                    } else if(rightTarget.indexOf(value) > -1){
                        answer+='R';
                        rightPosition = targetPosition;

                    } else {
                        let leftDistance = Math.abs(leftPosition[0] - targetPosition[0]) +  Math.abs(leftPosition[1] - targetPosition[1])
                        let rightDistance = Math.abs(rightPosition[0] - targetPosition[0]) +  Math.abs(rightPosition[1] - targetPosition[1])

                        if(leftDistance > rightDistance){
                            answer+='R';
                            rightPosition = targetPosition
                        } else if(leftDistance < rightDistance){
                            answer+='L';
                            leftPosition = targetPosition
                        } else {
                            if(hand === "left"){
                                answer+='L';
                                leftPosition = targetPosition
                            } else {
                                answer+='R';
                                rightPosition = targetPosition
                            }
                        }
                    }
                }
            }
        }
    }

    return answer;
}

// let case1 = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right", "LRLLLRLLRRL"
// let case2 = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left", "LRLLRRLLLRR"
// let case3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right", "LLRLLRLLRL"

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right", "LRLLLRLLRRL"));
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left", "LRLLRRLLLRR"));
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right", "LLRLLRLLRL"));

// console.log(solution([7, 0], "left", "Lㄱ"));