import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => (
  <div>
    {props.text} {props.value}
  </div>
)

const Statistics = (props) => {
  const totalSum = (props.good+props.neutral+props.bad)
  const averageVote = (((props.good)-(props.bad))/totalSum).toFixed(2)
  const positivePercentage = parseFloat((100*props.good/totalSum)).toFixed(2) + "%"

  if (totalSum>0) {
    return (
      <div>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={totalSum} />
      <StatisticLine text="average" value={averageVote} />
      <StatisticLine text="positive" value={positivePercentage} />
      </div>
    )
  } else {
    return (
      <div>
      No feedback given
      </div>
    )
  }
}

const HTMLtable = (props) => {
  const totalSum = (props.good+props.neutral+props.bad)
  const averageVote = (((props.good)-(props.bad))/totalSum).toFixed(2)
  const positivePercentage = parseFloat((100*props.good/totalSum)).toFixed(2) + "%"

  if (totalSum>0) {
    return (
    <div>
    <table>
    <tbody>
    <tr>
      <td>good</td>
      <td>{props.good}</td>
    </tr>
    <tr>
      <td>neutral</td>
      <td>{props.neutral}</td>
    </tr>
    <tr>
      <td>bad</td>
      <td>{props.bad}</td>
    </tr>
    <tr>
      <td>all</td>
      <td>{totalSum}</td>
    </tr>
    <tr>
      <td>average</td>
      <td>{averageVote}</td>
    </tr>
    <tr>
      <td>positive</td>
      <td>{positivePercentage}</td>
    </tr>
    </tbody>
    </table>
    </div>
    )
  } else {
    return (
      <div>
        No feedback given
      </div>
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
      <div>
      <HTMLtable good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
  )
}

//<Statistics good={good} neutral={neutral} bad={bad}/>

export default App