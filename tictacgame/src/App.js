
import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

function Square(props)//function component 
{
    return (
     
      <button className="square" onClick={props.Click}>
       {props.valu}
      </button>/*recieving state object's property */
    );
}


class Board extends React.Component {

  renderSquare(i) {
   
    return (<Square valu={this.props.value[i]} 
    Click={() => this.props.onClick(i)} />);
      
  }

    render() {
    return (
      <div>
        
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

  constructor(props){
    super(props);
    this.state = {history: [{square: Array(9).fill(null)}],
     isnextturn: true, step: 0
    };//isnextturn property added to differentiate b/w turns of players
    
    }
    handleclick(i) {
      const history = this.state.history.slice(0, this.state.step + 1);//clearing the history that comes after jumping to particular move(index of square array)
      const current = history[history.length-1];
      const square = current.square.slice();
     // document.write("hello");
      if(calculatewinner(square) || square[i])//return null if square is full or button is clicked already and have value
      {

        return;
      }
      square[i] = this.state.isnextturn ? "X" : "O";//putting value in square with index i and creating new array square

      this.setState({history: history.concat([{square: square}]),
        isnextturn: !this.state.isnextturn, step: this.state.step+1//updating step after every click that is required as index of history to update the current square
      });
    }
        jumpTo(move)//go to particular move
        {
         this.setState({
          isnextturn: (move % 2) === 0, 
          step: move
          
        });
        }

  render()
   {
    const history = this.state.history;
    const current = history[this.state.step];
    
  const winner = calculatewinner(current.square)
  const record = history.map((moves, move)=>{
    const desc = move ? 
    "Go to move #" + move:
    "Go to game"
    return(<li key={move}>
      <button onClick={() => this.jumpTo(move)}>{desc}</button>
      </li>
      );
    });

   let status;
    if(winner)
    {
      status = 'Winner is' + winner + '' + 'player';
    }
    else{
    status = 'Next player:' + (this.state.isnextturn ? 'X' : 'O');

    }
    return (
      <div className="game">
        <div className="game-board">
          <Board value={current.square} 
          onClick={(i) => this.handleclick(i)} 
          />
        </div>
        <div className="game-info">
          <div>{status}</div>

          <ol>{record}</ol>
        </div>
      </div>
    );
  }

  
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


// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
export default App;