import React from 'react';

function Submit({guesses, setGuesses}) {
    const [submitText, setSubmitText] = React.useState('')

    function submitHandler(event) {
        event.preventDefault()
        const newGuess = submitText
        setGuesses([...guesses, newGuess])
        setSubmitText('')
    } 

  return (
    <form className="guess-input-wrapper" onSubmit={(event) => submitHandler(event)}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input id="guess-input" 
            required 
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
