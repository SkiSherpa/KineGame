import React from 'react';

class GenTarget extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      boardSize: props.boardSize,
      targetCoor: props.targetCoor
    }
  }
  // !!! NOW, the page isn't displaying the target coor. The state here, is boardSize: 0, targetCoor: undefined
  // gen correct target coor in console
  render () {
    return (
      <div>
        <p>target Coordinate: {`(${this.props.targetCoor[0]}, ${this.props.targetCoor[1]})`}</p>
      </div>
    )
  }
}
export default GenTarget