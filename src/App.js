import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';

export const App = () => {
  const [data, setData] = useState("unloaded value");
  const simulatedFetch = async () => {
    const fetchedValue = await Promise.resolve('fetched value');
    const anotherFetchedValue = await Promise.resolve('another');
    await new Promise(res => {
      console.log('done!');
      setData(`${fetchedValue} ${anotherFetchedValue}`);
      res();
    });
  };

  useEffect(() => {
    simulatedFetch();
  }, [data]);
  return (
    <div>
      <h2>{data}</h2>
    </div>
  );
};

export default App;
