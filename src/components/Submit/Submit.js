import React from 'react';

function Submit({guesses, setGuesses}) {
    const [submitText, setSubmitText] = React.useState('')

    function submitHandler(event) {
        event.preventDefault()
        const newGuess = submitText.toUpperCase()
        setGuesses(newGuess)
        console.log(newGuess)
        setSubmitText('')
    } 

  return (
    <form class="guess-input-wrapper" onSubmit={(event) => submitHandler(event)}>
        <label for="guess-input">Enter guess:</label>
        <input id="guess-input" value={submitText} onChange={(event)=>setSubmitText(event.target.value)} type="text" />
    </form>
  );
}

export default Submit;
