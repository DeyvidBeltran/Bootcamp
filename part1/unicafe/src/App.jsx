import { useState } from "react"

const StatisticsLine = (props) => {
  return (
    <tr>
      <td style={{ color: props.color }}>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.good > 0 || props.neutral > 0 || props.bad > 0) {
    return (
      <table>
        <StatisticsLine text="good" value={props.good} color="green" />
        <StatisticsLine text="neutral" value={props.neutral} />
        <StatisticsLine text="bad" value={props.bad} />
        <StatisticsLine
          text="all"
          value={props.good + props.neutral + props.bad}
        />
        <StatisticsLine
          text="average"
          value={
            (props.good - props.bad) / (props.good + props.neutral + props.bad)
          }
        />
        <StatisticsLine
          text="positive"
          value={
            (props.good / (props.good + props.neutral + props.bad)) * 100 + "%"
          }
        />
      </table>
    )
  } else {
    return <p>No feedback given</p>
  }
}

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Unicafe</h1>
      <h2>Give feedback</h2>
      <Button text="good" handleClick={() => setGood(good + 1)} />
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" handleClick={() => setBad(bad + 1)} />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
