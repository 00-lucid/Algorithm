function solution(priorities, location) {
    let queue = priorities;
    // location === -1 일 경우, target이 print 된거임.
    let result = 0;
    while (location != -1) {
        // 출력 대상이 중요도가 가장 높을 때
        if (queue[0] === Math.max(...queue)) {
            if (location === 0) location = -1;
            else location--;
            queue.shift();
            result++;
        }
        // 출력 대상이 중요도가 가장 높지 않을 때
        else {
            if (location === 0) location = queue.length - 1;
            else location--;
            queue.push(queue[0]);
            queue.shift();
        }
    }
    return result;
}