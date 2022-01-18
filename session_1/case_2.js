function solution(a, b, c){
    let answer= "NO", arr= [a,b,c];
    arr.sort((a,b)=>{
        return a-b;
    });

    if(arr[0]+arr[1]>arr[2]) answer = "YES";  

    return answer;
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));