
import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';


//function App() {
  //return (
    //<div className="App">
      //<header className="App-header">
       // <img src={logo} className="App-logo" alt="logo" />
       // <p>
         // Edit <code>src/App.js</code> and save to reload.
       // </p>
       // <a
         // className="App-link"
          //href="https://reactjs.org"
          //target="_blank"
          //rel="noopener noreferrer"
       // >
         // Learn React
        //</a>
      //</header>
  //  </div>
 // );
//}


class Square extends React.Component{
constructor(props){
super(props);
this.state= {x: ""};

}
  render() {
    this.val=this.props.value;
    this.click=this.props.onClick;
    return (
     
      <button name = ""className="square" 
      onClick={this.click}>
       {this.val}
       
        {/* TODO */}
      </button>/*recieving state object's property */
    );
  }
}

class Board extends React.Component {

  constructor(props){
    super(props);
    this.state= {square: Array(9).fill(null)};
    
    }
    handleclick=(i)=>{
      const square = this.state.square.slice();//creating new array to assign new value to its element to change its state
      square[i] = "X"
      this.setState({square:square})
        
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