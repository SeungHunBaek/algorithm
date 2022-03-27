// function solution(id_list, report, k) {
//     let answer = Array.from({length: id_list.length}, ()=>0);
//     let reportList = {};

//     id_list.map((user)=>{
//         reportList[user] = [];
//     })

//     report.map((info)=>{
//         const [id, target] = info.split(' ');
//         // 중복신고방지
//         if(reportList[target].indexOf(id) < 0){
//             reportList[target].push(id)
//         }
//     })
    
//     for (const info in reportList) {
//         if(reportList[info].length >= k){
//             reportList[info].map(user => {
//                 answer[id_list.indexOf(user)] += 1;
//             })
//         }
//     }
//     return answer;
// }
function solution(id_list, report, k) {
    let reports = [...new Set(report)].map(a=>{return a.split(' ')});
    console.log(reports)
    let counts = new Map();
    for (const bad of reports){
        counts.set(bad[1],counts.get(bad[1])+1||1)
    }
    let good = new Map();
    for(const report of reports){
        if(counts.get(report[1])>=k){
            good.set(report[0],good.get(report[0])+1||1)
        }
    }
    let answer = id_list.map(a=>good.get(a)||0)
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
