import React from 'react';
import { createRoot } from 'react-dom/client';
import GenBoardSize from './components/GenBoardSize.jsx';
import UserInput from './components/UserInput.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);

  }

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

// ReactDOM.render(<App />, document.getElementById('app'));
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home"/>);