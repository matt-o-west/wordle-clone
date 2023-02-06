import { range } from 'lodash-es'
import React from 'react'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

const GuessList = ({ guesses, answer }) => {
  //console.log(guesses)
  const splitAnswer = Object.values(answer)
  console.log(splitAnswer[0].split(''))

  const checkAnswer = (letter) => {
    if (letter.match(/^[A-Z]+$/)) {
      return letter
    } else {
      return 'Invalid'
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
              <span className='cell' key={i}>
                {letter}
              </span>
            ))}
          </p>
        ))}
    </>
  )
}

export default GuessList
