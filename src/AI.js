  const lines = [
    [2, 5, 8],
    [6, 7, 8],
    [0, 3, 6],
    [0, 1, 2],
    [0, 4, 8],
    [2, 4, 6],
    [1, 4, 7],
    [3, 4, 5]
  ];

export default {


 calculateWinner(squares) {

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return lines[i];
    }
  }
  return null;
},

calculateMove(squares, latestMove) {

  const moves = Array(8);
  const latestMoves = Array(8);
  const winningMoves = Array(8);
  let m = 0;
  let l = 0;
  let w = 0;
  let x =0;
  let o = 0;
  moves[0] = "NA";
  const XLines = Array(8);
  const OLines = Array(8);
  latestMoves[0] = "NA";
  winningMoves[0] = "NA";

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if(squares[a] && squares[b] && squares[c]){

    } else if ( squares[a] && squares[b] ){
      if (squares[a] === squares[b] ) {
      if(squares[a] === 'O'){
        winningMoves[w] = c;
        w++;
      }else {
      moves[m] = c;
      m++;}
    } }else if( squares[a] && squares[c]){
      if( squares[a] === squares[c] ){
      if(squares[a] === 'O'){
        winningMoves[w] = b;
        w++;
      }else {
      moves[m] = b;
      m++;}
    }}else if (squares[c] && squares[b] ){
      if (squares[b] === squares[c] ){
     if(squares[c] === 'O'){
        winningMoves[w] = a;
        w++;
      }else {
      moves[m] = a;
      m++;}
    } }
    else if( a === latestMove ) {
      if(!squares[b]){
         latestMoves[l] = b;
      l++;
      }else if(!squares[c]){
         latestMoves[l] = c;
      l++;
      }

    }else if (b === latestMove ){
       if(!squares[c]){
         latestMoves[l] = c;
      l++;
      }else if(!squares[a]){
         latestMoves[l] = a;
      l++;
      }
    }else if (c === latestMove){
       if(!squares[b]){
         latestMoves[l] = b;
      l++;
      }else if(!squares[a]){
         latestMoves[l] = a;
      l++;
      }}
      }

  if(winningMoves[0] !== "NA"){
    return winningMoves[0];
  }else if(moves[0] !== "NA"){
    return moves[0];
  } else if(!squares[4]){
    return 4;
  }else {
    return latestMoves[0];

  }

  return null;
}
}


