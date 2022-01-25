import React, { useState, useEffect } from "react";

function Home(props) {
  const [toggle, setToggle] = useState(false);

  // componentDidMount
  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  // componentDidUpdate
  useEffect(() => {
    console.log("Toogle Updated");
  }, [toggle]);

  // componentWillUnmount
  useEffect(() => {
    return () => {
      console.log("Component UnMount");
    };
  }, []);

  return (
    <>
      <h1>{props.title}</h1>
      {toggle && <p>Hello, This is my react App.</p>}
      <button onClick={() => setToggle(!toggle)}>add 1</button>
    </>
  );
}

export default Home;
