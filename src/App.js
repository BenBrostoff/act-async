import React, { useEffect, useState } from 'react';
import './App.css';

export const App = () => {
  const [data, setData] = useState("unloaded value");
  const simulatedFetch = async () => {
    const fetchedValue = await Promise.resolve('fetched value');
    const anotherFetchedValue = await Promise.resolve('another');
    await new Promise(res => {
      setTimeout(res, 3000);
    });
    await new Promise(res => {
      setData(`${fetchedValue} ${anotherFetchedValue}`);
      res();
    });
  };

  useEffect(() => {
    simulatedFetch();
  }, []);
  return (
    <div>
      <h2 onClick={async () => {
        setData('loading');
        await new Promise(res => {
          setTimeout(res, 3000);
        });
        setData('was clicked');
      }}>{data}</h2>
    </div>
  );
};

export default App;
