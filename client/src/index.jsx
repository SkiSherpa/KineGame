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
      rowArray: []
    }
    this.selectBoardSize = this.selectBoardSize.bind(this);
    this.generateNewTarget = this.generateNewTarget.bind(this);
    this.genRowArray = this.genRowArray.bind(this);
  }

  // setting the boardSize state
  selectBoardSize(newSize) {
    console.log('index newSize', newSize);
    this.setState({
      boardSize: newSize
    })
    // this.setState((state) => {
    //   return {
    //   boardSize: newSize,
    //   targetCoor: [0, 0]
    //   }
    // });
    // ^^ happens if you want to change more than one key/val pair
  }
  // generating a new traget Coor from the choosen boardSize
  generateNewTarget(boardSize) {
    var randomY = Math.floor(Math.random()*(boardSize))
    var x = boardSize;
    // change the state for targetCoor to the ones above
    var newTargetCoor = [x, randomY];
    console.log('new Target Coor:', newTargetCoor);
    this.setState({targetCoor: newTargetCoor});
  }

  // genRowArray - gen an array with boardsize as length of array
  genRowArray(boardSize) {
    // gen array of length boardSize
    // array filled with index values
    var newRowArray = Array(boardSize).fill(null).map((_, i) => i);
    this.setState({rowArray: newRowArray});
  }

  render () {
    return (
      <div className="game">
        <h1>Learning Physics and Math</h1>
        <GenTarget boardSize={this.state.boardSize} targetCoor={this.state.targetCoor}/>
        <UserInput />
        <div className="game-board">
          <GenBoard genRowArray={this.genRowArray} rowArray={this.state.rowArray} selectBoardSize={this.selectBoardSize} generateNewTarget={this.generateNewTarget}/>
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