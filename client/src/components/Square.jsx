import React from 'react';

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        <p>{this.props.squareCoor} </p>
      </button>
    );
  }
}
export default Square;