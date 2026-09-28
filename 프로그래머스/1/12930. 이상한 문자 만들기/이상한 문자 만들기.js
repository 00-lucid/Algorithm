function solution(s) {
    s = s.split(' '); // ['try', 'hello', 'world']
    s = s.map((el, idx) => {
        let word = el; // 'try'
        word = word.split('').map((el2, idx) => {
            if (idx % 2 === 0) {
                return el2.toUpperCase();
            }
            else if (idx % 2 !== 0) {
                return el2.toLowerCase();
            }
        }).join('');
        return word;
    }).join(' ')
    return s;
}