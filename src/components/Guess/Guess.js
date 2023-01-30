import React from "react";
import { range } from '../../utils';

function Guess({guessValue}) {
  console.log(guessValue)
  return <>
    <p className="guess">
      {range(0, 5).map(index => (
        <span className="cell" key={index}>{guessValue && guessValue[index]}</span>
      ))}
  </p>
  </>
}

export default Guess;
