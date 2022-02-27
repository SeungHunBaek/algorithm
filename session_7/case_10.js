function solution(array, target){
    let answer = 0;
    let leftPoint = 0;
    let rightPoint = array.length;
    let mid = parseInt(rightPoint / 2);
    array.sort((a,b) => {
        return a-b;
    });
    
    while(array[mid] !== target) {
        
        if(array[mid] > target) {
            rightPoint = mid-1;
        } else if (array[mid] < target) {
            leftPoint = mid+1;
        }
        mid = parseInt((rightPoint + leftPoint) / 2);
    }
    answer = mid + 1;
    return answer;
}

const array = [23, 87, 65, 12, 57, 32, 99, 81, 1,1000];
console.log(solution(array, 32)); // 4
