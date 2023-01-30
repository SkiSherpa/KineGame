import React from 'react';

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        <p className="coorText">{this.props.value} </p>
      </button>
    );
  }
}
export default Square;