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
      targetCoor: [0, 0]
    }
    this.selectBoardSize = this.selectBoardSize.bind(this);
    this.generateNewTarget = this.generateNewTarget.bind(this);
  }

  // create fn to select board size
  selectBoardSize(newSize) {
    console.log('index newSize', newSize);
    // this.setState({
    //   boardSize: newSize,
    //   targetCoor: [0, 0]
    // })
    this.setState((state) => {
      return {
      boardSize: newSize,
      targetCoor: [0, 0]
      }
    });
  }
  generateNewTarget(boardSize) {
    var randomY = Math.floor(Math.random()*(boardSize))
    var x = boardSize;
    // change the state for targetCoor to the ones above
    var newTargetCoor = [x, randomY];
    console.log('new Target Coor:', newTargetCoor);
    // this.setState((state) => {
    //   return {
    //     boardSize: this.state.boardSize,
    //     targetCoor: this.newTargetCoor
    //   };
    // });
    this.setState({targetCoor: newTargetCoor});
  }


  render () {
    return (
      <div>
        <h1>Learning Physics and Math</h1>
        <GenBoard selectBoardSize={this.selectBoardSize} generateNewTarget={this.generateNewTarget}/>
        <GenTarget boardSize={this.state.boardSize} targetCoor={this.state.targetCoor}/>
        <UserInput />
      </div>
    )
  }
}

// ReactDOM.render(<App />, document.getElementById('app'));
// React 18 doesnt support ^^, you have to do below
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home"/>);