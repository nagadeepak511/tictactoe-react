import React, { Component } from 'react';

import Square from './square'
import GameState from './gameState'

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div id="mainGame">
              <div style={{display: 'flex'}}>
                <Square/>
                <Square/>
                <Square/>
              </div>
              <div style={{display: 'flex'}}>
                <Square/>
                <Square/>
                <Square/>
              </div>
              <div style={{display: 'flex'}}>
                <Square/>
                <Square/>
                <Square/>
              </div>
              <GameState currentPos={Square.currentPos}/>
            </div>
        );
    }
}
 
export default Board;