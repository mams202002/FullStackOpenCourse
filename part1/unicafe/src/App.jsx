import { useState } from 'react'


const StatisticLine = ({text, value}) => {
  return (
    <p>{text} {value} </p>
  )
}


const Statistics = ({good, neutral, bad, all, average, positive}) => {
  if (all === 0 ) return (
    <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
  )
  return (

    <div>
      <h1>statistics</h1>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive + "%"} />
      
    </div>
    
  )

}

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>


const App = () => {


  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const click_good = () => {
    setGood(good + 1)
  }
  const click_neutral = () => {
    setNeutral(neutral + 1)
  }
  const click_bad = () => {
    setBad(bad + 1)
  }

  const all = good + bad + neutral
  const positive = all > 0 ? ((good / all) * 100).toFixed(10) : 0
  const average = all > 0 ? ((good - bad)/all).toFixed(13) : 0
  


 
  return (
    <div>
      
      <h1>give feedback</h1>
      <Button onClick={click_good} text='good'/>
      <Button onClick={click_neutral} text='neutral'/>
      <Button onClick={click_bad} text='bad'/>
      <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        all={all} 
        average={average}
        positive={positive}
       />
    </div>
  )
}


export default App
