import './styles.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import GenBoard from './components/GenBoard.jsx';



class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      didWin: 0,
    }
    this.updateDidWin = this.updateDidWin.bind(this);
  }
  updateDidWin(ip) {
    console.log('update hit');
    if (ip !== 'MISS') {
      var newWinCount = this.state.didWin;
      newWinCount++;
      this.setState({didWin: newWinCount});
    }
  }

  render () {
    return (
      <div className="game">
        <h1>Learning Physics and Math</h1>
        <div>How many times you hit the target: {this.state.didWin}</div>
        <div className="game-board">
          <GenBoard updateDidWin={this.updateDidWin}/>
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