// To start a board size of 2x2
import React from 'react';
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
    this.setState({boardSize: value});
  }
  //
  handleSubmit(event) {
    event.preventDefault();
    this.props.selectBoardSize(this.state.boardSize);
    this.props.generateNewTarget(this.state.boardSize);
    // this.props.genBoardArray(
    //   this.props.genRowArray(this.state.boardSize)
    // );
    this.props.genRowArrayAndBoard(this.state.boardSize);
    // !!!- not passing the newly gen rowArray from ^^
    // state of the boardArray is not being saved, but is being rendered
    // console.log('after genRowArray, rowArray:', this.props.rowArray);
    // this.props.genBoardArray(this.props.rowArray, this.state.boardSize);
  }

  renderSquare(i) {
    return <Square value={i} key={i}/>;
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

        <div>
          {this.props.board.map(() => {
            return (
              <div className='board-row'>
                {this.props.rowArray.map((_, i) => {
                  return <Square value={i} key={i}/>;
                })}
              </div>
            )
          })}
        </div>

        {/* <div className="board-row">
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
        </div> */}

      </div>

    )
  }

}

export default GenBoard;