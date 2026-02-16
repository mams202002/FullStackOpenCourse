import { useState } from 'react'

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
  const positive = all > 0 ? ((good / all) * 100).toFixed(13) : 0
  const average = all > 0 ? ((good - bad)/all).toFixed(15) : 0

  

  
 
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={click_good}>good</button>
      <button onClick={click_neutral}>neutral</button>
      <button onClick={click_bad}>bad</button>
      <h1>statistics</h1>
      <div>
        <a>good {good}</a>
      </div>
      <div>
        <a>neutral {neutral}</a>
      </div> 
      <div>
        <a>bad {bad}</a>
      </div>
      <div>
        <a>all {all}</a>
      </div> 
      <div>
        <a>average {average} </a>
      </div> 
      <div>
        <a>positive {positive} %</a>
      </div>    


    </div>
  )
}




export default App
