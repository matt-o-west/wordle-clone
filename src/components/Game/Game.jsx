import React from 'react'
import { useState } from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'

import Input from './Input'
import GuessList from './GuessList'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [guess, setGuess] = useState('')
  const [guesses, setGuesses] = useState([])
  //console.info({ answer })

  guess > 5 && alert('Please enter a 5 letter word') & setGuess('')

  return (
    <>
      <div className='guess-results'>
        <GuessList guesses={guesses} answer={{ answer }} />
      </div>

      <Input
        guess={guess}
        setGuess={setGuess}
        setGuesses={setGuesses}
        guesses={guesses}
      />
    </>
  )
}

export default Game
