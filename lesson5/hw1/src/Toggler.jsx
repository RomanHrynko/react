import React, { Component } from 'react';

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onButton: false,
    };
  }

  changedText = () => {
    this.setState({
      onButton: !this.state.onButton,
    });
  };

  render() {
    return (
      <button className="toggler" onClick={this.changedText}>
        {this.state.onButton ? 'On' : 'Off'}
      </button>
    );
  }
}

export default Toggler;
