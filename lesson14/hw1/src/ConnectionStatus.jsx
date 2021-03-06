import React, { useEffect, useState } from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState(true);

  const onlineStatusHandler = () => {
    setStatus(true);
  };

  const offlineStatusHandler = () => {
    setStatus(false);
  };

  useEffect(() => {
    window.addEventListener('online', onlineStatusHandler);
    window.addEventListener('offline', offlineStatusHandler);

    return () => {
      window.removeEventListener('online', onlineStatusHandler);
      window.removeEventListener('offline', offlineStatusHandler);
    };
  }, []);

  return status ? (
    <div className="status">online</div>
  ) : (
    <div className="status status_offline">offline</div>
  );
};

export default ConnectionStatus;
