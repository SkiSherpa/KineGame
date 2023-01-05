// To start a board size of 2x2
import React from 'react';
class GenBoard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      boardSize: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var value = Number.parseInt(event.target.value);
    console.log('handleCHange', value);
    this.setState({boardSize: value});
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('hit', this.state.boardSize);
    const currentBoardSize = this.state.boardSize;
    this.props.selectBoardSize(currentBoardSize);
  }

  render () {
    return (
      <form>
        <label>
          <p>select board size</p>
          <input type='number' name='boardSize' value={this.state.value} onChange={this.handleChange}/>
        </label>
        <button type='submit' onClick={this.handleSubmit}>Select Size</button>
      </form>
    )
  }

}

export default GenBoard;