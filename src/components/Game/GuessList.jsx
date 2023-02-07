import { range } from 'lodash-es'
import React from 'react'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { checkGuess, gameFinished } from '../../game-helpers'

const GuessList = ({ guesses, answer }) => {
  //console.log(guesses)
  const splitAnswer = Object.values(answer)
  const answerString = splitAnswer[0]
  console.log(guesses.includes(answerString))

  return (
    <>
      {gameFinished(guesses, answerString)}
      {guesses.length > NUM_OF_GUESSES_ALLOWED && (
        <span>You have run out of guesses!</span>
      )}
      {guesses.length < NUM_OF_GUESSES_ALLOWED &&
        range(NUM_OF_GUESSES_ALLOWED - guesses.length).map((i) => (
          <p className='guess' key={i}>
            {range(5).map((i) => (
              <span className='cell' key={i}></span>
            ))}
          </p>
        ))}

      {guesses.length <= 6 &&
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
