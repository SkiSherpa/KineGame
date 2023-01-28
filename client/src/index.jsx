import './styles.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import GenBoard from './components/GenBoard.jsx';
import UserInput from './components/UserInput.jsx';
import GenTarget from './components/GenTarget.jsx';


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      boardSize: 0,
      targetCoor: [0, 0],
      rowArray: [],
      board: []
    }
    this.selectBoardSize = this.selectBoardSize.bind(this);
    this.generateNewTarget = this.generateNewTarget.bind(this);
    this.genRowArrayAndBoard = this.genRowArrayAndBoard.bind(this);
  }

  // setting the boardSize state
  selectBoardSize(newSize) {
    this.setState({
      boardSize: newSize
    })
  }
  // generating a new traget Coor from the choosen boardSize
  generateNewTarget(boardSize) {
    var randomY = Math.floor(Math.random()*(boardSize))
    var x = boardSize;
    var newTargetCoor = [x, randomY];
    this.setState({targetCoor: newTargetCoor});
  }

  // genRowArray - gen row array of length boardSize
  genRowArrayAndBoard(boardSize) {
    var newRowArray = Array(boardSize).fill(null).map((_, i) => i);
    this.setState({rowArray: newRowArray}, () => {
      this.setState({
        board: Array(boardSize).fill(this.state.rowArray).map((_, i) => this.state.rowArray)
      })
    });
    // var newBoard = this.state.rowArray.map(function () {
    //   console.log('!', this.state.rowArray);
    //   return Array(boardSize).fill(this.state.rowArray).map((_, i) => i);
    // });
    // console.log('newBoard:', newBoard);
    // this.setState({board: newBoard});
  }



  render () {
    return (
      <div className="game">
        <h1>Learning Physics and Math</h1>
        <GenTarget boardSize={this.state.boardSize} targetCoor={this.state.targetCoor}/>
        <UserInput />
        <div className="game-board">
          <GenBoard
            genRowArrayAndBoard={this.genRowArrayAndBoard}
            genRowArray={this.genRowArray}
            selectBoardSize={this.selectBoardSize}
            generateNewTarget={this.generateNewTarget}
            board={this.state.board}
            rowArray={this.state.rowArray}
          />
        </div>

      </div>
    )
  }
}

// ReactDOM.render(<App />, document.getElementById('app'));
// React 18 doesnt support ^^, you have to do below
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home"/>);