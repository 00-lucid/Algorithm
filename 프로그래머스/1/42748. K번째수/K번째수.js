function solution(array, commands) {
    let result = [];
    for (let i = 0; i < commands.length; i++) { // commands 개수 만큼 반복
        // COMMANDS의 0~1 INDEX VALUE 까지 array를 slice해준다.
        let sliceArray = array.slice(commands[i][0] - 1, commands[i][1]);
        // slice한 ARRAY 정렬
        sliceArray.sort((x,y)=>x-y);
        // slice한 ARRAY중 COMMANDS의 3 INDEX VALUE 번째 INDEX의 값을 result에 push.
        result.push(sliceArray[commands[i][2] - 1]);
    }
    return result;
}