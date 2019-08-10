import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';

export const App = () => {
  const [data, setData] = useState("unloaded value");
  const simulatedFetch = async () => {
    setData("loading value");
    const fetchedValue = await Promise.resolve('fetched value');
    await new Promise(res => {
      setData(fetchedValue);
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
