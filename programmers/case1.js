function solution(id_list, report, k) {
    let answer = Array.from({length: id_list.length}, ()=>0);
    let reportList = {};

    id_list.map((user)=>{
        reportList[user] = [];
    })

    report.map((info)=>{
        const [id, target] = info.split(' ');
        // 중복신고방지
        if(reportList[target].indexOf(id) < 0){
            reportList[target].push(id)
        }
    })
    
    for (const info in reportList) {
        if(reportList[info].length >= k){
            reportList[info].map(user => {
                answer[id_list.indexOf(user)] += 1;
            })
        }
    }
    return answer;
}

console.log(solution(
    ["muzi", "frodo", "apeach", "neo"], 
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
)); //[ 2, 1, 1, 0 ]
console.log(solution(
    ["con", "ryan"], 
    ["ryan con", "ryan con", "ryan con", "ryan con"], 
    3
)); //[ 0, 0 ]
