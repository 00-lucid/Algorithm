function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let check = truck_weights.length
    let bridge = [];
    let done = [];
    let progress = [];
    
    while (done.length !== check) {
        let sum = bridge.reduce( (x, y) => { return x + y }, 0); // 7, [7]
        let target = truck_weights[0]; // 4
        
        // 트럭이 올라갔을 때 다리 허용 무게 이하라면, 올린다
        if (sum + target <= weight) { // 7 + 4 <= 10
            truck_weights.shift(); // [4, 5, 6]
            bridge.push(target); // [7]
            progress.push(0); // [0]
        }
                
        // 트럭의 진행상황을 업데이트한다.
        progress = progress.map(el => el + 1); // [2]
        
        // 트럭의 진행상황이 만료일 때, 내린다. && done 처리한다.
        while (progress.includes( bridge_length )) {
            done.push(bridge[0]); // [7]
            progress.shift(); // []
            bridge.shift(); // []
        }
        
        answer++; // 2
    }
    
    
    return answer + 1;
}