function solution(s, n) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let arr = s.split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === " ") continue;
        const isCapital = arr[i].match(/[A-Z]/g);
        if (isCapital) arr[i] = arr[i].toLowerCase();
        const idx = alphabet.indexOf(arr[i]);
        let newIdx = idx + n;
        while (newIdx > (alphabet.length - 1)) newIdx = newIdx % alphabet.length;
        arr[i] = alphabet[newIdx];
        if (isCapital) arr[i] = arr[i].toUpperCase();
    }
    
    return arr.join("");
}