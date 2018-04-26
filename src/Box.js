import React, { Component } from 'react';


class Box extends Component {
    constructor(props) {
    super(props);
    this.state = {
      isActive : props.restart,
    }
      this.handleClick = this.handleClick.bind(this);
    }

  handleClick(){
    this.setState({isActive: false,})
    this.props.onClick()
  }
  render() {
    const isActive = this.props.value ? true : false;
    let gameCell = "square";
    if(isActive ){
      gameCell = "square-inactive";
    }
    if(this.props.winningSquare){
       gameCell = this.props.value === 'X' ? "square-winning" : "square-loosing";
    }


    return (
      <button className={gameCell} onClick={this.handleClick}>
        {this.props.value}
      </button>
    );
  }
}

export default Box;
