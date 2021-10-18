import React, { Component } from 'react';

var states = [
  'Place "X"',
  'Place "O"',
  'Game over, "X" wins',
  'Game over, "O" wins',
  'Game over, draw'
]

class GameState extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          presentState:states[0]
        }
    }
    render() { 
        return ( 
          <h3>{this.state.presentState}</h3>
        );
    }
    updateGameState(){
      var currentPos = this.props.currentPos
      if(currentPos == 'X') this.setState({presentState: states[1]})
      else this.setState({presentState: states[0]})
    }
}
 
export default GameState;