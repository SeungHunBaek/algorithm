function solution(n){
    let answer=[];
    for (let i = 0; i < n.length; i++) {
        let reverse = 0, temp=n[i], flag = true;

        while(temp){
            let t = temp%10;
            reverse = reverse*10+t;
            temp = parseInt(temp/10);
        }

        if(reverse === 1) break;
        for (let j = 2; j <= parseInt(Math.sqrt(reverse)); j++) {

            if(reverse%j === 0){
                flag = false;
                break;
            }
        }
        if(flag) answer.push(reverse);
    }

    return answer;
}
let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100]; //23 2 73 2 3
console.log(solution(arr));