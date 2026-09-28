function solution(clothes) {
    let obj = {};
    var answer = 0;
    // 옷(2+1) * 머리(1+1) * 바지(5+1) - 1
    for (let cloth of clothes) {
        const name = cloth[0];
        const type = cloth[1];
        obj[type] ? obj[type].push(name) : obj[type] = [name];
    }
    
    
    
    console.log(obj);
    
    for (let property in obj) {
        if (answer !== 0) {
          answer *= (obj[property].length + 1);   
        } else {
          answer += (obj[property].length + 1);
        }
    }
    
    return answer - 1;
}