import React, { Component } from 'react';
import Box from './Box';
import ScoreBoard from './ScoreBoard';
import AI from './AI';


class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext : true,
      game : true,
      winner:null,
      scores:[],
    };
    this.winningPlayer = "NA";
  }

    handleClick(i,addWinner) {
    const squares = this.state.squares.slice();
    let winner = AI.calculateWinner(squares);
      if (winner) {
      if(this.winningPlayer === "NA"){addWinner(this.winningPlayer);}
       this.winningPlayer = squares[winner[0]];
       alert("Game Over");
       this.setState({game: false});
        return;
    } else if(squares[i]){
        alert("Choose Another Box");
        return;
      }
      else {
      squares[i] = 'X';

      let mm = AI.calculateMove(squares, i);
      if(mm === "NA"){
        this.setState({game: false});
      } else {
      squares[mm] = 'O';
      }

      winner = AI.calculateWinner(squares);
           if (winner) {
           this.winningPlayer = squares[winner[0]];
      addWinner(this.winningPlayer);}
      this.setState({squares: squares, xIsNext : !this.state.xIsNext, winner : AI.calculateWinner(squares)});
    }
  }

  reStart(){

    this.setState({squares: Array(9).fill(null),
      xIsNext : true,
      game : true,
      winner:null,
      });

    this.winningPlayer = "NA";

  }

  renderSquare(i, winner,addWinner) {
    let winningSquare = false;
    if(winner && winner.indexOf(i) > -1 ){
      winningSquare = true;
    }
    return (
      <Box winningSquare = {winningSquare}
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i,addWinner)}
      />
    );
  }


  render() {

    let status;

    const winner = this.state.winner;

    if (winner) {
      const [a,b,c] = winner;
       this.winningPlayer = this.state.squares[a];
      status = this.state.squares[a] === 'X' ? "You Won" : "You Lost" ;
    } else if(!this.state.game){
                    status = 'Game Over - Its a Draw!!';
     } else {
      status = 'Tic Tac Toe';
    }


    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0,winner,this.props.addWinner)}{this.renderSquare(1,winner,this.props.addWinner)}{this.renderSquare(2,winner,this.props.addWinner)}
        </div>
        <div className="board-row">
          {this.renderSquare(3,winner,this.props.addWinner)}{this.renderSquare(4,winner,this.props.addWinner)}{this.renderSquare(5,winner,this.props.addWinner)}
        </div>
        <div className="board-row">
          {this.renderSquare(6,winner,this.props.addWinner)}{this.renderSquare(7,winner,this.props.addWinner)}{this.renderSquare(8,winner,this.props.addWinner)}
        </div>
        <div>
        <button className="restart" onClick={() => this.reStart()} >New Game</button>
        </div>
      </div>

    );
  }
}



export default Board;
