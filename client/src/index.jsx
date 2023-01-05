import React from 'react';
import { createRoot } from 'react-dom/client';
import GenBoard from './components/GenBoard.jsx';
import UserInput from './components/UserInput.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      boardSize: 0
    }
    this.selectBoardSize = this.selectBoardSize.bind(this);
  }

  // create fn to select board size
  selectBoardSize(newSize) {
    console.log('index newSize', newSize[boardSize]);
  }

  render () {
    return (
      <div>
        <h1>Learning Physics and Math</h1>
        <GenBoard selectBoardSize={this.selectBoardSize} />
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