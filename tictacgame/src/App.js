
import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';




function Square(props)//function component 
{

    const val=props.value;//this (used with class component)is removed
    const click=props.onClick;
    return (
     
      <button name = ""className="square" 
      onClick={click}>
       {val}
       
        {/* TODO */}
      </button>/*recieving state object's property */
    );
  
}

class Board extends React.Component {

  constructor(props){
    super(props);
    this.state= {square: Array(9).fill(null)};
    
    }
    handleclick=(i)=>{
      const nsquare = this.state.square.slice();//creating shadow (immutation) new array to assign new value to its element to change its state
      nsquare[i] = "X"
      this.setState({square:nsquare})
        
        }

  renderSquare(i) {
   
    return <Square value={this.state.square[i]} onClick=
      {()=>this.handleclick(i)}/>;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

//ReactDOM.render(
  //<App />,
  //document.getElementById('root')
//);
export default App;