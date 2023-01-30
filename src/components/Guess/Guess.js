import React from "react";
import { range } from '../../utils';

function Guess(guessValue) {
  console.log(guessValue)
  return <>
    <p className="guess">
      {range(1, 6).map(index => (
        <span className="cell" key={index}></span>
      ))}
  </p>
  </>
}

export default Guess;
