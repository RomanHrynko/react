import React from 'react';

const Logout = props => {
  return (
    <button className="login btn" onClick={props.onLogout}>
      Logout
    </button>
  );
};

export default Logout;
