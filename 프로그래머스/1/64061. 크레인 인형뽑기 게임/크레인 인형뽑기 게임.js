function solution(board, moves) {
    let box = 0;
    moves = moves.map(
        function(el) { // move 1 or 2 or 3 or 4 or 5
            for (let i = 0; i < board.length; i++) {
                let out = board[i][el - 1]
                if (board[i][el - 1] !== 0) { // doll exist
                    board[i][el - 1] = 0;
                    return out; // doll type return
                }
            }
        }
    ) // end map [1, 1, 2, 5, 3, '', '', 1]; // doll type arr
    
    for (let o = 0; o < moves.length; o++) {
        if (moves[o] === undefined) {
            // delete
            moves.splice(o, 1);
            o = -1;
        }
        else if (moves[o] === moves[o + 1]) {
            box += 1;
            moves.splice(o, 2);
            o = -1;
        }
    }
    
    return box*2;
}