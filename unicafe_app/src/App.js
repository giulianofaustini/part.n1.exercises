import { useState } from 'react'

const Button = (props) => {
  // console.log(props);
  return (
    <button onClick={props.onClick}>
    {props.text}
</button>
)
}

const Statistics = (props) => {
  // console.log(props);
  if (props.good || props.neutral || props.bad !== 0) {
    return (
      <div>
        <h1>
          Statistics to view:
        </h1>
        <StatisticLine text='good' value={props.good}/>    
        <StatisticLine text='neutral' value={props.neutral} />
        <StatisticLine text='bad' value={props.bad} />
        <StatisticLine text='all' value={props.all} />
        <StatisticLine text='average' value={props.average} />
        <StatisticLine text='positive' value={`${props.positivePerc}%`} />
       </div>
    )
  } else {
    return (
      <div>
      <h1>
        statistics
      </h1>
      <h2>
        No feedback given
        </h2>
      </div>
    )
  }
}

const StatisticLine = (props) => {
  console.log(props)
  return (
    <table>
      <tbody>
        <tr>
          <td>{props.text}</td>
          <td>{props.value}</td>
        </tr>
      </tbody>
    </table>
    )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => {
    // console.log(increaseGood);
    setGood(good + 1)
  }

  const increaseNeutral = () => {
    // console.log(increaseNeutral);
    setNeutral(neutral + 1)
  }

  const increaseBad = () => {
    // console.log(increaseBad);
    setBad(bad + 1)
  }

  const tot = good + bad + neutral
  const average = tot ? (good - bad) / tot : 0
  const positivePerc = tot ? (good / tot) * 100 : 0
  
  return (
    <div>
      <h1>
        Give your feedback:
      </h1>
      <Button onClick={increaseGood} text='good' />
      <Button onClick={increaseNeutral} text='neutral' />
      <Button onClick={increaseBad} text='bad' />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={tot}
        average={average}
        positivePerc={positivePerc}
      />
    </div>
  )
}

export default App