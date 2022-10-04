import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage.jsx";

const App = () => {
  const [num, setNum] = useState(0);
  const [showFlg, setShowFlg] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchFlg = () => {
    setShowFlg(!showFlg);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>hello</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気？</ColorfulMessage>
      <button onClick={onClickCountUp}>Count up</button>
      <br />
      <button onClick={onClickSwitchFlg}>on/off</button>

      <p>{num}</p>
      {showFlg && <p>( ^^)</p>}
    </>
  );
};

export default App;
