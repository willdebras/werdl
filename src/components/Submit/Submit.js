import React from 'react';

function Submit({guesses, setGuesses, gameStatus, setGameStatus, answer}) {
    const [submitText, setSubmitText] = React.useState('')

    function submitHandler(event) {
        event.preventDefault()
        const newGuess = submitText

        // do not form submit if guess is less than 5 letters
        if(newGuess.length < 5) return
        
        // set the guess to state and then clear the input
        setGuesses([...guesses, newGuess])
        setSubmitText('')

        // if the guess is correct set the game status to won
        if(newGuess === answer) setGameStatus('won')
        // if we have maxed the number of guesses set the status to lost
        if(guesses.length === 5) setGameStatus('lost') 
    } 

  return (
    <form className="guess-input-wrapper" onSubmit={(event) => submitHandler(event)}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input id="guess-input" 
            required 
            disabled = {(gameStatus === 'lost' | gameStatus === 'won') && true}
            minLength={5} 
            maxLength={5} 
            value={submitText} 
            onChange={(event)=>setSubmitText(event.target.value.toUpperCase())} 
            type="text" 
        />
    </form>
  );
}

export default Submit;
