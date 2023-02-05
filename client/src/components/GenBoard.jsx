import React from 'react';
import Square from './Square.jsx';

class GenBoard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      target: 10
    }
    this.handleClick = this.handleClick.bind(this);
    this.renderSquare = this.renderSquare.bind(this);
    this.genTarget = this.genTarget.bind(this);
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'C';
    this.setState({squares: squares});
  }
  genTarget() {
    const targets = [2, 5, 8];
    let random = Math.floor(Math.random() * 3);
    console.log(targets[random]);
    this.setState({target: targets[random]}, () => {
      var newSquares = this.state.squares.slice();
      newSquares[this.state.target] = 'X';
      this.setState({squares: newSquares});
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render () {
    return (
      <div>
        <div className="status"></div>
        <button onClick={() => this.genTarget()}>Generate Target</button>
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