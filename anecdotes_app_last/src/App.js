import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>
}

  const App = () => {
    const anecdotes = [
      'If it hurts, do it more often.',
      'Adding manpower to a late software project makes it later!',
      'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      'Premature optimization is the root of all evil.',
      'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
      'The only way to go fast, is to go well.'
    ]

    const [selected, setSelected] = useState(0)

    const zeroFilled = Array(anecdotes.length).fill(0)
    const [points, setPoints] = useState(zeroFilled)
 
    const randomAnecdote = () => {
    const index = Math.floor(Math.random() * anecdotes.length)
    console.log(index);
    setSelected(index)
  };
  
    const handleVoteClick = () => {
      setPoints((points) => {
        const newVotes = [...points]
        newVotes[selected] += 1
        console.log(newVotes)
        return newVotes  
      })
    }
    const maxVotes = points.indexOf(Math.max(...points))
    console.log(maxVotes)
    
    const minVotes = points.indexOf(Math.min(...points))
    console.log(minVotes)

  const handleQuoteClick = () => {
    randomAnecdote();
  };
  return (
    <div>
      <h1>Anecdote of the day:</h1>
      <p>{anecdotes[selected]}</p>
      <p>The current quote has gained {points[selected]} votes</p>
      <Button handleClick={handleVoteClick} text="vote" />
      <Button handleClick={handleQuoteClick} text="next anecdote" />
      <h1>The anecdote with most vote: </h1>
      <p>{anecdotes[maxVotes]}</p>
      <p>The quote has gained {points[maxVotes]} votes</p>
      <h1>The anecdote with the least vote: </h1>
      <p>{anecdotes[minVotes]}</p>
      <p>The quote has gained only {points[minVotes]} votes</p>
    </div>
  );
};

export default App;