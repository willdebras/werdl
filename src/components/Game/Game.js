import React from 'react';
import Submit from '../Submit';
import Results from '../Results';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([])
  return <>
    <Results guesses={guesses} answer={answer}/>
    <Submit guesses={guesses} setGuesses={setGuesses} />
  </>;
}

export default Game;
