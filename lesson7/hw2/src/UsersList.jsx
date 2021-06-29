import React from 'react';
import Pagination from './Pagination.jsx';
import User from './User.jsx';

class UsersList extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.state = {
      currentPage: 1,
      itemsPerPage: 3,
    };
  }

  goPrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };

  goNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  render() {
    const { users } = this.props;
    const { currentPage, itemsPerPage } = this.state;

    const startPage = (currentPage - 1) * itemsPerPage;
    const countUsersOnPage = users.slice(startPage, startPage + itemsPerPage);

    return (
      <div>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          currentPage={currentPage}
          totalItems={users.length}
          itemsPerPage={itemsPerPage}
        />
        <ul className="users">
          {countUsersOnPage.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
