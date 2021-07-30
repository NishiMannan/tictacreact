
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

}

  render() {
    const val=this.props.value;
    return (
     
      <button className="square" onClick={function a(){alert("You clicked") }}> 
        {this.props.value}
        {/* TODO */}
      </button>/*recieving prop object and onclick calling alert function*/
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
   
    return <Square value={i}/>;
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