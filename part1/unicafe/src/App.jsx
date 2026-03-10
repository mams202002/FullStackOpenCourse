import { useState } from 'react'


const Statistics = ({good, neutral, bad, all, average, positive}) => {

  return (

    <div>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p> 
    </div>
    
  )

}


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
      <button onClick={click_good}>good</button>
      <button onClick={click_neutral}>neutral</button>
      <button onClick={click_bad}>bad</button>
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
