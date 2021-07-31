
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
      onClick={click}
      >
        
       {val}
       
        {/* TODO */}
      </button>/*recieving state object's property */
    );
  
}
function calculatewinner(square)//function will return square index value if 3 consecutive or diagnal combination made and that value will decide who is the winner
{
const cal = [
  [0,1,2],
  [3,4,5], 
  [6,7,8],
  [0,3,6], 
  [1,4,7], 
  [2,5,8], 
  [0,4,8],
  [2,4,6]
];
for(let i = 0; i < cal.length; i++)
{
const [a, b, c] = cal[i];
if(square[a]===square[b] && square[a]===square[c])
{
  return square[a];
}
}
  return null;

}

class Board extends React.Component {

  constructor(props){
    super(props);
    this.state= {square: Array(9).fill(null),isnextturn: true};//isnextturn property added to differentiate b/w turns of players
    
    }
    handleclick=(i)=>{
      const nsquare = this.state.square.slice();//creating shadow (immutation) new array to assign new value to its element to change its state
      if(calculatewinner(nsquare)|| nsquare[i])//return null if square is full or button is clicked already and have value
      {

        return;
      }
      nsquare[i] = this.state.isnextturn ? "X" : "O";
      this.setState({square:nsquare,
        isnextturn:!this.state.isnextturn})
        
        }

      

  renderSquare(i) {
   
    return <Square value={this.state.square[i]} onClick=
      {()=>this.handleclick(i)}/>;
  }



    render() {
    const winner=calculatewinner(this.state.square)

   let status;
    if(winner)
    {
      status = 'Winner is'+ winner;
    }
    else{
    status = 'Next player:' + (this.state.isnextturn ? 'X' : 'O');

    }
   

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