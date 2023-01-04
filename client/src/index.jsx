import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Componenet {
  constructor (props) {
    super(props);

  }

  // make a new Game obj for each round


  render () {
    return (
      <div>
        <h1>Learning Physics and Math</h1>
        <GenBoardSize />
        <UserInput />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));