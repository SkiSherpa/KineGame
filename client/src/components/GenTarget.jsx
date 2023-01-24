import React from 'react';

class GenTarget extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      boardSize: props.boardSize,
      targetCoor: this.props.targetCoor
    }
  }

  render () {
    return (
      <div>
        <p>target Coordinate: {`(${this.props.targetCoor[0]}, ${this.props.targetCoor[1]})`}</p>
      </div>
    )
  }
}
export default GenTarget