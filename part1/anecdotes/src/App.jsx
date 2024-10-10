import { useState } from 'react'

const randomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const BestQuote = ({ anecdote }) => {

  return (
    <div>
      <h2>Anecdote with most votes</h2>
      <p>{anecdote}</p>
    </div>
  )
}
const App = () => {


  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 })
  const [best, setBest] = useState(anecdotes[0])

  const chooseNext = () => {
    const qoute = randomNum(0, anecdotes.length)
    setSelected(qoute)
    mostVoted()
  }

  const quoteVote = () => {
    const votedQuote = votes[selected] + 1
    const newVotes = { ...votes }
    newVotes[selected] = votedQuote
    setVotes(newVotes)
  }

  const mostVoted = () => {
    const maxVote = Math.max(...Object.values({ ...votes }))
    const idx = Object.values({ ...votes }).indexOf(maxVote)
    setBest(anecdotes[idx])
  }


  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <br />
      <button onClick={chooseNext}>next anecdote</button>
      <button onClick={quoteVote}>vote</button>
      <BestQuote anecdote={best} />
    </div>
  )
}

export default App