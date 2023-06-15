import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  const totalSum = (props.good+props.neutral+props.bad)
  const averageVote = (((props.good)-(props.bad))/totalSum).toFixed(2)
  const positivePercentage = (100*props.good/totalSum).toFixed(2)

  if (totalSum>0) {
    return (
      <p>
      good {props.good} <br/>
      neutral {props.neutral} <br/>
      bad {props.bad} <br/>
      all {totalSum} <br/>
      average {averageVote} <br/>
      positive {positivePercentage} %
      </p>
    )
  } else {
    return (
      <p>
      No feedback given
      </p>
    )
  }
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const voteGood = () => {
    console.log('Good vote')
    setGood(good + 1)
  }

  const voteNeutral = () => {
    console.log('Neutral vote')
    setNeutral(neutral + 1)
  }

  const voteBad = () => {
    console.log('Bad vote')
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>
      give feedback
      </h1>
      <Button handleClick={() => voteGood()} text={'good'}/>
      <Button handleClick={() => voteNeutral()} text={'neutral'}/>
      <Button handleClick={() => voteBad()} text={'bad'}/>
      <h1>
        statistics
      </h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App