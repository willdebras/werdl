import React from 'react';
import { range } from '../../utils';
import Guess from '../Guess/Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Results({guesses}) {

  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map(index => (
        <Guess key={index} guessValue={guesses[index]}/>
      ))}
    </div>
  );
}

export default Results;
