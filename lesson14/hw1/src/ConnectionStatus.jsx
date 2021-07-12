import React, { useEffect, useState } from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    const onlineStatusHandler = () => {
      setStatus(true);
    };

    const offlineStatusHandler = () => {
      setStatus(false);
    };

    window.addEventListener('online', onlineStatusHandler);
    window.addEventListener('offline', offlineStatusHandler);

    return () => {
      window.removeEventListener('online', onlineStatusHandler);
      window.removeEventListener('offline', offlineStatusHandler);
    };
  }, []);

  return status ? (
    <div className="status">Online</div>
  ) : (
    <div className="status status_offline">Offline</div>
  );
};

export default ConnectionStatus;
