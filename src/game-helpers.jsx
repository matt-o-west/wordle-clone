export function checkGuess(guess, answer, index) {
  const answerChar = answer[0].split('')[index]
  const letter = guess.charAt(index)
  const parsedAnswer = answer[0]
  //console.log(letter, answer[0].split('')[index], parsedAnswer)

  let status
  if (letter === answerChar) {
    status = 'correct'
  } else if (parsedAnswer.includes(letter)) {
    status = 'misplaced'
  } else {
    status = 'incorrect'
  }
  return status
}

export function gameFinished(guesses, answer) {
  function compare(guesses, answer) {
    return guesses.includes(answer)
  }

  if (guesses <= NUM_OF_GUESSES_ALLOWED && compare(guesses, answer) === true) {
    return (
      <div class='happy banner'>
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{guesses} guesses</strong>.
        </p>
      </div>
    )
  } else if (guesses === NUM_OF_GUESSES_ALLOWED && answer === 'incorrect') {
    return (
      <div class='sad banner'>
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    )
  }
  return null
}
