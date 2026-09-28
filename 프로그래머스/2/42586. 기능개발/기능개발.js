function solution(progresses, speeds) {
    let doneDay = [];
    let result = [];
    progresses.map((el, idx) => {
        let count = 0;
        while (el < 100) {
            el += speeds[idx];
            count += 1;
        }
        doneDay.push(count);
        return el;
    })
    console.log(doneDay);
    while (doneDay.length > 0) {
        let box = 1;
        for (let i = 1; i < doneDay.length; i ++){
            if (doneDay[0] >= doneDay[i]) {
                box += 1;
            }
            else {
                break;
            }
        }
        doneDay.splice(0,box);
        result.push(box);
    }
    return result;
}