function solution(participant, completion) {
    let answer = '';
    let participantMap = new Map();
    
    participant.map(value => {
        if(participantMap.has(value)){
            participantMap.set(value, participantMap.get(value)+1);
        } else {
            participantMap.set(value, 1);
        }
    });
    
    completion.map(value => {
        if(participantMap.get(value) < 2){
            participantMap.delete(value)
        } else {
            participantMap.set(value, participantMap.get(value)-1);
        }
    });
    
    answer = participantMap.keys().next().value;
    
    return answer;
}
console.log(solution(["leo", "kiki", "eden"],["eden", "kiki"]));