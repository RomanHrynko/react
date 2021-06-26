import React, { Component } from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: true,
      isSpinner: false,
    };
  }

  handleLogin = () => {
    this.setState({
      isSpinner: true,
    });

    setTimeout(() => {
      this.setState({
        isLogin: false,
        isSpinner: false,
      });
    }, 2000);
  };

  handleLogout = () => {
    this.setState({
      isLogin: true,
    });
  };

  render() {
    let button;

    if (this.state.isLogin) {
      button = <Login onLogin={this.handleLogin} />;
    } else {
      button = <Logout onLogout={this.handleLogout} />;
    }

    return <>{this.state.isSpinner ? <Spinner size={100} /> : button}</>;
  }
}

export default Auth;
