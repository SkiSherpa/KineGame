import './styles.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import GenBoard from './components/GenBoard.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      didWin: 0,
      player: ''
    }
    this.updateDidWin = this.updateDidWin.bind(this);
    this.usernameSubmit = this.usernameSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  updateDidWin(ip) {
    console.log('update hit');
    if (ip !== 'MISS') {
      var newWinCount = this.state.didWin;
      newWinCount++;
      this.setState({didWin: newWinCount});
    }
  }

  usernameSubmit(e) {
    e.preventDefault();
    // ^^ needed or it tries to submit the data to next webpage
  }
  handleChange(e) {
    this.setState({player: e.target.value});
    e.preventDefault();
  }

  render () {
    return (
      <div className="game">
        <h1>Learning Physics and Math</h1>
        <h2>An X marks the target to hit. Your cannons only fire in horizontal straight lines.</h2>
        <div>How many times {this.state.player} hit the target: {this.state.didWin}</div>
        <form onSubmit={this.usernameSubmit}>
          <label>Type in Username and hit enter
            <input
              type='text'
              value={this.state.value}
              onChange={this.handleChange}
              />
          </label>
        </form>
        <div className="game-board">
          <GenBoard
            updateDidWin={this.updateDidWin}
            player={this.state.player}
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