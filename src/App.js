

import React, { useState } from "react";
import "./style.css";

import min from './img/minlvl.jpg';
import begin from './img/1 level.jpg';
import lomid from './img/lvl 1.jpg';
import mid from './img/level 5.jpg';
import max from './img/lvl 15.jpg';

function App() {
  const [num, setNum] = useState(-1);

  const decreaseNum = (value) => {
    setNum((prevNum) => Math.max(prevNum + value, -1));
  };

  const increaseNum = (value) => {
    setNum((prevNum) => Math.min(prevNum + value, 15));
  };

  const resetNum = () => {
    setNum(-1);
  };

  const setMaxNum = () => {
    setNum(15);
  };

  return (
    <div className="container">
<img className="donkey" src={
  num < 0
    ? min
    : num < 5
    ? begin
    : num < 10
    ? lomid
    : num < 15
    ? mid
    : max
} />
      <h1>{num} {num === 15 ? 'кот думал не работает max lvl' : num === -1 ? 'работает не проверяй min lvl' : 'lvl'}</h1>

      <button className="round-btn" onClick={() => decreaseNum(-1)}>
         -1
      </button>

      <button className="round-btn" onClick={() => increaseNum(+1)}>
         +1
      </button>

      <button className="round-btn" onClick={() => decreaseNum(-5)}>
         -5
      </button>

      <button className="round-btn" onClick={() => increaseNum(+5)}>
         +5
      </button>

      <button className="round-btn" onClick={resetNum}>
        Очистить
      </button>

      <button className="round-btn" onClick={setMaxNum}>
        Max
      </button>

    </div>
  );
}

export default App;
