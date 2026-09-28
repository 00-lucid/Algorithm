function solution(s) {
    
    const numToStr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    
    for (const str of numToStr) {
        const isIndex = s.indexOf(str);
        if (isIndex != -1) {
            const regex = new RegExp(str, 'g');
            s = s.replace(regex, numToStr.indexOf(str));
        }
    }
    
    return s*1;
}