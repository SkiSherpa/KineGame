// To start a board size of 2x2
import React from 'react';
import GenTarget from './GenTarget.jsx';
class GenBoard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      boardSize: 0,
      targetCoor: [0, 0]
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // !!! GenTARGET will be called here and passed the selected board size

  handleChange(event) {
    var value = Number.parseInt(event.target.value);
    console.log('handleCHange', value);
    this.setState({boardSize: value});
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('hit', this.state.boardSize);
    this.props.selectBoardSize(this.state.boardSize);
    this.props.generateNewTarget(this.state.boardSize);
  }
  // pass the size of board to GenTarget
  // randomly generate targets on the target axis
  // pass the board and targets to index
  //  from index do play inputs

  render () {
    return (
      <form>
        <label>
          <p>select board size</p>
          <input type='number' name='boardSize' min='1' max='10' value={this.state.value} onChange={this.handleChange}/>
        </label>
        <button type='submit' onClick={this.handleSubmit}>Create New Board & Target</button>
      </form>

    )
  }

}

export default GenBoard;