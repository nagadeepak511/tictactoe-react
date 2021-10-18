import React, { Component } from 'react';

class Square extends Component {
    constructor(props) {
        super(props);
        this.state = { value:'' }
    }
    render() { 
        return ( <div 
            style={{
                height: "70px",
                width: "70px",
                border: "1px solid",
                margin: '3px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                borderRadius: '20px'
            }}
            onClick={
              () =>{
                if(!this.state.value){
                  this.setState({value:Square.currentPos})
                  Square.currentPos = Square.currentPos == 'X'?'O':'X'
                }
              }
            }>{this.state.value}</div> );
    }

}

Square.currentPos = 'X'
 
export default Square;