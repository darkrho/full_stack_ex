import { useState } from 'react'

function Button({ handleClick, text }) {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

function StatisticLine({ text, value }) {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

function Statistics({ good, neutral, bad, all, avg, positive }) {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <br />
        <p>No feedback given</p>
      </div>
    )
  }
  return (

    <table>
      <thead>
        <th>
          <h2>Statistics</h2>
        </th>
      </thead>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={avg} />
        <StatisticLine text="positive" value={positive} />
      </tbody>
    </table>
  )
}
function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [avg, setAvg] = useState(0)
  const [all, setAll] = useState(0)
  const [positive, setPositive] = useState(0)
  // functions to make statistics
  const makeAvg = (good, neutral, bad) => {
    setAvg((bad) / (good + neutral + bad))

  }
  const sumAllVotes = (good, neutral, bad) => {
    setAll(good + neutral + bad)
  }
  const positiveVotesAvg = (good, neutral, bad) => {
    setPositive((good + neutral) / (good + neutral + bad))
  }
  // function to handle votes
  const handleClick = (vote) => {
    let updatedGood;
    let updatedBad;
    let updatedNeutral;
    if (vote === "good") {
      setGood(good + 1)
      updatedGood = good + 1
    } else {
      updatedGood = good
    }
    if (vote === "neutral") {
      setNeutral(neutral + 1)
      updatedNeutral = neutral + 1
    } else {
      updatedNeutral = neutral
    }
    if (vote === "bad") {
      setBad(bad + 1)
      updatedBad = bad + 1
    } else {
      updatedBad = bad
    }
    sumAllVotes(updatedGood, updatedNeutral, updatedBad)
    makeAvg(updatedGood, updatedNeutral, updatedBad)
    positiveVotesAvg(updatedGood, updatedNeutral, updatedBad)
  }
  return (
    <div>
      <h1>Give feedback</h1>
      <br />
      <Button handleClick={() => handleClick("good")} text="good" />
      <Button handleClick={() => handleClick("neutral")} text="neutral" />
      <Button handleClick={() => handleClick("bad")} text="bad" />
      <br />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} avg={avg} positive={positive} />
    </div>
  )
}

export default App
