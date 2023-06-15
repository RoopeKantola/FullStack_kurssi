import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Display = (props) => (
  <p>
    good {props.goodValue} <br/>
    neutral {props.neutralValue} <br/>
    bad {props.badValue}
  </p>
)

const Total = (props) => {
  const totalSum = (props.good+props.neutral+props.bad)
  const averageVote = (((props.good)-(props.bad))/totalSum)
  const positivePercentage = (100*props.good/totalSum)
  return (
  <p>
    all {totalSum} <br/>
    average {averageVote} <br/>
    positive {positivePercentage} %
  </p>
  )
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
      <Display goodValue={good} neutralValue={neutral} badValue={bad}/>
      <Total good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App