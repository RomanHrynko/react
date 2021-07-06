import React from 'react';
import TemperatureInput from './TemperatureInput.jsx';
import BoilingVerdict from './BoilingVerdict.jsx';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
      scale: 'c',
    };
  }

  toCelsius = fahrenheit => {
    return ((fahrenheit - 32) * 5) / 9;
  };

  toFahrenheit = celsius => {
    return (celsius * 9) / 5 + 32;
  };

  tryConvert = (temperature, convert) => {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  };

  handleCelsiusChange = temperature => {
    this.setState({ scale: 'c', temperature });
  };

  handleFahrenheitChange = temperature => {
    this.setState({ scale: 'f', temperature });
  };

  render() {
    const temperature = this.state.temperature;
    const celsius =
      this.state.scale === 'f' ? this.tryConvert(temperature, this.toCelsius) : temperature;
    const fahrenheit =
      this.state.scale === 'c' ? this.tryConvert(temperature, this.toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

export default Calculator;
