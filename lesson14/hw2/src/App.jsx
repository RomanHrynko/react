import React, { useState } from 'react';
import Clock from './Clock.jsx';

const App = () => {
  const [status, setStatus] = useState(true);

  const toggleStatus = () => {
    setStatus(!status);
  };

  return (
    <>
      <button onClick={toggleStatus}>Toggle</button>
      <div>{status && <Clock location="London" offset={0} />}</div>
      <div>{status && <Clock location="Kyiv" offset={2} />}</div>
      <div>{status && <Clock location="New York" offset={-5} />}</div>
    </>
  );
};

export default App;
