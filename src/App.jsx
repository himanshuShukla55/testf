import React, { useEffect, useState } from "react";

const App = () => {
  const [msg, setMsg] = useState("Dummy Data");
  const getData = async () => {
    try {
      const res = await fetch("/api");
      const { data } = await res.json();
      setMsg(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return <div>{msg}</div>;
};

export default App;
