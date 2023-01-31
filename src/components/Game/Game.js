import React from 'react';
import Submit from '../Submit';
import Results from '../Results';

import { sample } from '../../utils';
import { WORDS } from '../../badspells';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([])

  const [gameStatus, setGameStatus] = React.useState('running')

  return <>
    <Results guesses={guesses} answer={answer} />
    <Submit guesses={guesses} setGuesses={setGuesses} gameStatus={gameStatus} setGameStatus={setGameStatus} answer={answer} />
    {(gameStatus === 'won') && (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> You guessed the not word in {' '}
          <strong>{guesses.length} guesses</strong>.
        </p>
      </div>
    )}
    {(gameStatus === 'lost') && (
      <div class="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
    )}
  </>;
}

export default Game;
