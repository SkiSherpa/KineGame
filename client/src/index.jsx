import './styles.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import GenBoard from './components/GenBoard.jsx';



class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      boardSize: 0,
      targetCoor: [0, 0],
      rowArray: [],
      board: []
    }

  }



  render () {
    return (
      <div className="game">
        <h1>Learning Physics and Math</h1>
        <div className="game-board">
          <GenBoard/>
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