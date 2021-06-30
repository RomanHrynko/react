import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    status: 'online',
  };

  componentDidMount() {
    window.addEventListener('online', this.onHandleOnline);
    window.addEventListener('offline', this.onHandleOffline);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.onHandleOnline);
    window.removeEventListener('offline', this.onHandleOffline);
  }

  onHandleOnline = () => {
    this.setState({
      status: 'online',
    });
  };

  onHandleOffline = () => {
    this.setState({
      status: 'offline',
    });
  };

  render() {
    const { status } = this.state;

    const className = status === 'offline' ? 'status status_offline' : 'status';

    return <div className={className}>{status}</div>;
  }
}

export default ConnectionStatus;
