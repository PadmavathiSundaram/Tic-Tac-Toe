import React, { Component } from 'react';
import ScoreRow from './ScoreRow';


class ScoreBoard extends Component {
   constructor(props) {
    super(props);

   }

     render(){

        const rows = [];
       const games = this.props.games;
       let UserTotal = 0;
       let ComputerTotal = 0;
       games.forEach((game,index) => {
         game.index = index;
       rows.push(
        <ScoreRow
          Game={game}
          key={index}
        />
      );
         UserTotal = UserTotal + game.user;
         ComputerTotal = ComputerTotal + game.Computer;

    });

       return (
         <div>
         <p/>
         <p/>
           <center><span> <b> Score Card </b> </span></center>

    <table className="score">
        <thead>
          <tr>
            <th>Game</th>
         <th>User</th>
         <th>Computer</th>
          </tr>
         </thead>
              <tbody>
             {rows}
         </tbody>
      <tbody>
        <tr className="TotalScore">
        <th>Total</th>
        <td>{UserTotal}</td>
        <td>{ComputerTotal}</td>
        </tr>
      </tbody>
       </table>
           </div>
     );


}
}

export default ScoreBoard;
