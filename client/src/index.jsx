import './styles.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import axios from 'Axios';
import GenBoard from './components/GenBoard.jsx';


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      didWin: 0,
      player: 'anon',
      pastWins: 0
    }
    this.updateDidWin = this.updateDidWin.bind(this);
    this.usernameSubmit = this.usernameSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this);
    this.getPastData = this.getPastData.bind(this);
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
    this.getPastData();
    e.preventDefault();
    // ^^ needed or it tries to submit the data to next webpage
    // and delete the saved state
  }
  handleChange(e) {
    this.setState({player: e.target.value});
    e.preventDefault();
  }

  // take the name and wins from state and save to db
  save() {
    const {didWin, player} = this.state;

    const userData = {
      didWin,
      player
    };

    axios
      .post('/save', userData)
      .then((res) => {
        console.log('Reacland save(), res.config.data: ', res.config.data);
      })
      .catch(err => {
        console.log('Error in react, ', err);
      })
  };
  // get previous player data from db
  getPastData() {
    console.log('getPastData hit');
    const {didWin, player} = this.state;

    const userData = {
      didWin,
      player
    };
    axios.get('/getPastData', userData)
    .then(res => {
      console.log(res.data);
      // loop over res.data arr
        // IF the current.username === players name
        // change the state of pastWins to res.data.wins
      res.data.map(currentPlayer => {
        if (currentPlayer.username === this.state.player) {
          const winUpdate = currentPlayer.wins;
          this.setState({pastWins: winUpdate});
        }
      })
    })
    .catch(err => console.log('Error in react, get: ', err));
  }

  // A login and save to database
  // a GET, to retrieve login data.

  render () {
    return (
      <div className="game">
        <h1>Learning Physics and Math</h1>
        <h2>An X marks the target to hit. Your cannons only fire in horizontal straight lines.</h2>
        <form onSubmit={this.usernameSubmit}>
          <label>Type in Username and hit enter
            <input
              type='text'
              value={this.state.value}
              onChange={this.handleChange}
              />
          </label>
        </form>
        <div>Number of successful hits for {this.state.player} in the past is {this.state.pastWins}</div>
        <div> Save and press enter with username typed to update number of total wins.</div>
        <div>Number of times {this.state.player} has hit the target {this.state.didWin} for this log in.</div>
        <button onClick={() => this.save()}>Save My Score</button>
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