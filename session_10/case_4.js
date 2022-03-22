function solution(money, coin){
    let answer;
    let dynamicTable = Array.from({length: money+1}, ()=>1000);

    dynamicTable[0] = 0;
    for (let i = 0; i < coin.length; i++) {
        for (let j = coin[i]; j <= money; j++) {
            dynamicTable[j] = Math.min(dynamicTable[j], dynamicTable[j-coin[i]]+1);
        }
    }
    return answer = dynamicTable[money];
}

let arr=[1, 2, 5];
console.log(solution(15, arr)); // 3
