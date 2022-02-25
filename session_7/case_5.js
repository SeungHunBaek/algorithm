function solution(n, k){
    let answer;
    let cache = Array.from({length:n}, (value, index) => {
        return 0;
    })

    k.forEach((element, index) => {
        let tempIndex;
        // hit
        if(cache.includes(element)) tempIndex = cache.indexOf(element);
        // miss
        else tempIndex = n-1;
        while(tempIndex > 0){
            cache[tempIndex] = cache[--tempIndex];        
        }
        cache[0] = element;
    });
    answer = cache;
    return answer;
}
function solution2(n, k){
    let answer;
    let cache = Array.from({length:n}, (value, index) => {
        return 0;
    })

    k.forEach((element, index) => {
        // hit
        if(cache.includes(element)) {
            cache.splice(cache.indexOf(element), 1);
            cache.unshift(element);  
        // miss
        } else {
            cache.unshift(element);
            if(cache.length > n) {
                cache.pop();
            }
        }
    });
    answer = cache;
    return answer;
}

let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(`answer: ${solution(5, arr)}`); // 75326
console.log(`answer: ${solution2(5, arr)}`); // 75326