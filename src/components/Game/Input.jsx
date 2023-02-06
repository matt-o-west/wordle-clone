import React from 'react'
import { useState } from 'react'

const Input = ({ setGuess, setGuesses, guesses }) => {
  const [input, setInput] = useState('')

  const handleSubmitGuess = (e) => {
    e.preventDefault()
    input.length !== 5 && alert('Please enter a 5 letter word')

    if (input.length === 5) {
      setGuess(input)
      setGuesses([...guesses, input])
      setInput('')
    }
    return null
  }

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmitGuess}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value.toUpperCase())}
      />
    </form>
  )
}

export default Input
