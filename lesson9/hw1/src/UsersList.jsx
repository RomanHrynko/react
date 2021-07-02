import React, { Component } from 'react';
import Filter from './Filter.jsx';
import User from './User.jsx';

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    const { users } = this.props;

    const filterUsersList =
      this.state.value !== ''
        ? users.filter(user => user.name.toLowerCase().includes(this.state.value.toLowerCase()))
        : users;

    return (
      <div>
        <Filter onChange={this.handleChange} />
        <ul className="users">
          {filterUsersList.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
