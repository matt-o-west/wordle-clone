import { range } from 'lodash-es'
import React from 'react'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

const GuessList = ({ guesses }) => {
  return (
    <>
      {guesses.length >= NUM_OF_GUESSES_ALLOWED && (
        <p className='guess'>You have run out of guesses!</p>
      )}
      <p className='guess' key={self.crypto.randomUUID()}>
        {range(6 - guesses.length).map((i) => (
          <span className='cell'></span>
        ))}
        {guesses &&
          guesses.map((guess) => (
            <>
              {guess.split('').map((letter, i) => (
                <span className='cell' key={i}>
                  {letter}
                </span>
              ))}
            </>
          ))}
      </p>
    </>
  )
}

export default GuessList
