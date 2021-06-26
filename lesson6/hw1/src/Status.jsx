import React from 'react';
import Online from './Online.jsx';
import Offline from './Offline.jsx';

const Status = props => {
  return <>{props.isOnline ? <Online /> : <Offline />}</>;
};

export default Status;
