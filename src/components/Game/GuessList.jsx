import { range } from 'lodash-es'
import React from 'react'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { checkGuess } from '../../game-helpers'

const GuessList = ({ guesses, answer }) => {
  //console.log(guesses)
  const splitAnswer = Object.values(answer)
  console.log(`This is the split answer: ${splitAnswer[0].split('')}`)

  //check if the letter in a guess matches the answer, whether it is placed exactly in the right spot, is contained in the answer, or is incorrect
  const checkLetter = (letter) => {
    const letterIndex = answer.indexOf(letter)
    if (letterIndex === -1) {
      return 'incorrect'
    } else if (letterIndex === guesses.indexOf(letter)) {
      return 'correct'
    } else {
      return 'misplaced'
    }
  }

  return (
    <>
      {guesses.length >= NUM_OF_GUESSES_ALLOWED && (
        <p className='guess'>You have run out of guesses!</p>
      )}
      {range(NUM_OF_GUESSES_ALLOWED - guesses.length).map((i) => (
        <p className='guess' key={i}>
          {range(5).map((i) => (
            <span className='cell' key={i}></span>
          ))}
        </p>
      ))}

      {guesses &&
        guesses.map((guess) => (
          <p className='guess' key={self.crypto.randomUUID()}>
            {guess.split('').map((letter, i) => (
              <span
                className={`cell ${checkGuess(guess, splitAnswer, i)}`}
                key={i}
              >
                {letter}
              </span>
            ))}
          </p>
        ))}
    </>
  )
}

export default GuessList
