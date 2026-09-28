function solution(arr1, arr2) {
    let result = [];
    
    for (let i = 0; i < arr1.length; i++) { // i = 0
        let box = [];
        for (let o = 0; o < arr1[i].length; o++){ // i = 0, o = 0
            box.push(arr1[i][o] + arr2[i][o])
        }
        result.push(box);
    }
    
    return result
}