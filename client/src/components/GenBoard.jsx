// To start a board size of 2x2
import React from 'react';
import GenTarget from './GenTarget.jsx';
import Square from './Square.jsx';

class GenBoard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      boardSize: 0,
      targetCoor: [0, 0]
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderSquare = this.renderSquare.bind(this);
  }
  // setting the state of boardSize from user IP
  handleChange(event) {
    var value = Number.parseInt(event.target.value);
    console.log('handleCHange', value);
    this.setState({boardSize: value});
  }
  //
  handleSubmit(event) {
    event.preventDefault();
    console.log('handleSubmit', this.state.boardSize);
    this.props.selectBoardSize(this.state.boardSize);
    this.props.generateNewTarget(this.state.boardSize);
    this.props.genRowArray(this.state.boardSize);
  }
  renderSquare(i) {
    return <Square value={i}/>;
  }

  render () {
    return (
      <div>

        <form>
          <label>
            <p>select board size</p>
            <input type='number' name='boardSize' value={this.state.value} onChange={this.handleChange}/>
          </label>
          <button type='submit' onClick={this.handleSubmit}>Create New Board & Target</button>
        </form>
        <div className="status"></div>

        <div className='board-row'>
          {/* use the boardArray from props to gen an arr of arr for board */}
          {/* use map cause we have an existing array in props "boardArray" has dummy index values */}
          {/* {this.props.rowArray.map(() => {
            return <Square value={i}/>;
          })} */}
        </div>

        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>

      </div>

    )
  }

}

export default GenBoard;