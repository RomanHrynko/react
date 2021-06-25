import React, { Component } from 'react';

const CORAL = 'Coral';
const AQUA = 'Aqua';
const BISQUE = 'Bisque';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squareColor: '',
    };
  }

  colorSquareText = colorName => {
    this.setState({
      squareColor: colorName,
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.squareColor}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseOver={() => this.colorSquareText(CORAL)}
            onMouseOut={() => this.colorSquareText()}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseOver={() => this.colorSquareText(AQUA)}
            onMouseOut={() => this.colorSquareText()}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseOver={() => this.colorSquareText(BISQUE)}
            onMouseOut={() => this.colorSquareText()}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
