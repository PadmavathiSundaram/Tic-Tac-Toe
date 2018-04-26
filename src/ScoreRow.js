import React, { Component } from 'react';


class ScoreRow extends Component {
  render() {
   const game = this.props.Game;
   let userTheme = "player";
   let computerTheme = "player";

   userTheme = game.user ===  0 ? userTheme : "Winner";
   computerTheme = game.Computer ===  0 ? computerTheme : "Winner";
    return (
      <tr>
        <th>Game {game.index + 1}</th>
        <td className={userTheme}>{game.user}</td>
        <td className={computerTheme}>{game.Computer}</td>
      </tr>
    );
  }
}

export default ScoreRow;

