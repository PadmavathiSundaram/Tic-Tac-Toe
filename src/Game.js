import React, { Component } from 'react';
import Board from './Board';
import ScoreBoard from './ScoreBoard';
import './Board.css';

class Game extends Component {
 constructor(props) {
    super(props);
    this.state = {
      scores:[],
    };
    this.winningPlayer = "NA";
    this.addWinner = this.addWinner.bind(this);
  }
  addWinner(winner) {
     let game = this.getScore(winner);
      const newItems = this.state.scores.concat([
      game
      ]);
      this.setState({scores : newItems});
    }

   getScore(winner){
    let game = null;
    if(winner === 'X'){
        game = {user : 1, Computer: 0 };
      } else if (winner === 'NA'){
        game = {user : 0, Computer: 0 };
      }else {
        game = {user : 0, Computer: 1 };
      }
      return game;
      }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board addWinner={this.addWinner}/>
        </div>
        <div className="game-info">
          <div>  <ScoreBoard games={this.state.scores}/></div>
        </div>
      </div>
    );
  }
}

export default Game;
