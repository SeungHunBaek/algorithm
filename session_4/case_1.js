function solution(n){
    let answer=0, max=0;

    n.forEach(value => {
        let sum = 0;
        for (let i = 0; i < String(value).length; i++) {
            sum+= parseInt(String(value)[i]);
        }
        
        if(max <= sum) {
            if(answer < value){
                max = sum;
                answer = value;
            }
        }
        sum = 0;
    });
    return answer;
}

function solution2(arr){
    let answer, max=Number.MIN_SAFE_INTEGER;
    for(let x of arr){
        let sum=0, tmp=x;
        while(tmp){
            sum+=(tmp%10);
            tmp=Math.floor(tmp/10);
        }
        if(sum>max){
            max=sum;
            answer=x;
        }
        else if(sum===max){
            if(x>answer) answer=x;
        }
    }
    return answer;
}

function solution3(arr){
    let answer, max=Number.MIN_SAFE_INTEGER;
    for(let x of arr){
        let sum=x.toString().split('').reduce((a,b)=> a+Number(b), 0);
        
        if(sum>max){
            max=sum;
            answer=x;
        }
        else if(sum===max){
            if(x>answer) answer=x;
        }
    }
    return answer;
}
let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(arr))
console.log(solution2(arr))
console.log(solution3(arr))
