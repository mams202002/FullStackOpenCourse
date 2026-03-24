import { useState } from 'react'


const StatisticLine = ({text, value}) => {
  
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
    
  )
}


const Statistics = ({good, neutral, bad}) => {
  const all = good + bad + neutral
  const positive = all > 0 ? ((good / all) * 100) : 0
  const average = all > 0 ? ((good - bad)/all) : 0
  if (all === 0 ) return (
        <p>No feedback given</p>
  )
  return (


    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={average.toFixed(2)} />
        <StatisticLine text="positive" value={positive.toFixed(2) + "%"} />
      </tbody>
    </table>

    
    
  )

}

const Button = ({handleClick, text}) => (
<button onClick={handleClick}>{text}</button>)


const App = () => {


  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const clickGood = () => setGood(good + 1)
  
  const clickNeutral = () => setNeutral(neutral + 1)
  
  const clickBad = () => setBad(bad + 1)
  

  
  


 
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={clickGood} text='good'/>
      <Button handleClick={clickNeutral} text='neutral'/>
      <Button handleClick={clickBad} text='bad'/>
      <h1>statistics</h1>
      <Statistics  good={good} neutral={neutral} bad={bad} />
    </div>
  )
}


export default App
