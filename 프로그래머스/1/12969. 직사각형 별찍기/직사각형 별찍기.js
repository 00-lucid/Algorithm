process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" "); // [5, 3] [가로, 세로]
    const a = Number(n[0]), b = Number(n[1]);
    let item = '*'.repeat(a);
    let result = ''
    for (let i = 0; i < b; i++){
        result += `${item}\n`
    }
    console.log(result)
});