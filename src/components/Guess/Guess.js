import React from "react";
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({guessValue, answer}) {
  const guessMeta = checkGuess(guessValue, answer)
  return <>
    <p className="guess">
      {range(0, 5).map(index => (
        <span className={`cell ${guessValue && guessMeta[index].status}`} key={index}>{guessValue && guessValue[index]}</span>
      ))}
    </p>
  </>
}

export default Guess;
