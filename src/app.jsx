import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage.jsx";

const App = () => {
  const onClickBtn = () => {};
  //const contentStyle = {color: "blue", fontSize:'18px'}
  return (
    <>
      <h1 style={{ color: "red" }}>hello</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気？</ColorfulMessage>
      <button onClick={onClickBtn}>BTN</button>
    </>
  );
};

export default App;
