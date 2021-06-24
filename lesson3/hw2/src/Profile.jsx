import React from 'react';
import moment from 'moment';

const Profile = props => {
  const age = moment(props.userData.birthDate).format('DD MM YYYY');

  return (
    <div className="profile">
      <div className="profile__name">{`${props.userData.firstName} ${props.userData.lastName}`}</div>
      <div className="profile__birth">{`Was born ${age} in ${props.userData.birthPlace}`}</div>
    </div>
  );
};

export default Profile;
