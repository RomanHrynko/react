import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error();
      })
      .then(({ avatar_url, name, location }) => {
        setUserData({
          userName: name,
          userLocation: location,
          userAvatar: avatar_url,
        });
      });
  }, [userId]);

  if (!userData) {
    return null;
  }

  const { userName, userAvatar, userLocation } = userData;

  return (
    <div className="user">
      <img alt="User Avatar" src={userAvatar} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{userName}</span>
        <span className="user__location">{userLocation}</span>
      </div>
    </div>
  );
};

// class User extends React.Component {
//   // state = {
//   //   userName: null,
//   //   userAvatar: null,
//   //   userLocation: null,
//   // };

//   componentDidMount() {
//     this.fetchUserData(this.props.match.params.userId);
//   }

//   componentDidUpdate(prevProps) {
//     const prevUser = prevProps.match.params.userId;
//     const currentUser = this.props.match.params.userId;

//     if (prevUser !== currentUser) {
//       this.fetchUserData(currentUser);
//     }
//   }

//   render() {
//     const { userAvatar, userName, userLocation } = this.state;
//     if (!userAvatar || !userName || !userLocation) {
//       return null;
//     }

//     return (
//       <div className="user">
//         <img alt="User Avatar" src={this.state.userAvatar} className="user__avatar" />
//         <div className="user__info">
//           <span className="user__name">{this.state.userName}</span>
//           <span className="user__location">{this.state.userLocation}</span>
//         </div>
//       </div>
//     );
//   }
// }

export default User;
