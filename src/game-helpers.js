export function checkGuess(guess, answer, index) {
  const answerChar = answer[0].split('')[index]
  const letter = guess.charAt(index)
  const parsedAnswer = answer[0]
  console.log(letter, answer[0].split('')[index], parsedAnswer)

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
