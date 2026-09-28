function solution(n, arr1, arr2) {
    // arr1, arr2의 요소들을 2진수로 바꾼다.
    arr1 = arr1.map(el => el.toString(2));
    arr2 = arr2.map(el => el.toString(2));
    
    let arr1LengthMax = Math.max(...arr1.map(el => el.length));
    let arr2LengthMax = Math.max(...arr2.map(el => el.length));
    
    // arr1, arr2의 2진수 요소의 자릿수를 동등하게 맞춰준다.
    arr1 = arr1.map(el => {
        if (el.length < arr1LengthMax) {
            return '0'.repeat(arr1LengthMax - el.length) + el;
        }
        else {
            return el;
        }
    })
    arr2 = arr2.map(el => {
        if (el.length < arr2LengthMax) {
            return '0'.repeat(arr2LengthMax - el.length) + el;
        }
        else {
            return el;
        }
    })
    // arr1, arr2의 각 요소들끼리 0과 1의 위치를 비교한다.
        // map? reduce? for? while?
        // sol_1) map
    let arr3 = arr1.map((el, idx) => {
        let box = '';
        for (let i = 0; i < el.length; i++) {
            if (el[i] === arr2[idx][i] && el[i] === '0') {
                box += ' ';
            }
            else {
                box += '#';
            }
        }
        return box;
    })
    return arr3;
}