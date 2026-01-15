const App = () => {
  

  return (
    <div>
      <p>Number of exercises {exercise1 + exercise2 + exercise3}</p>
    </div>

  )
}

const Header = () => {
  const course = 'Half Stack application development'
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}
const Content = () => {
  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'
  const exercise1 = 10
  const exercise2 = 7
  const exercise3 = 14
  return (
    <div>
      <p>
        {part1} {exercise1}
      </p>
      <p>
        {part2} {exercise2}
      </p>
      <p>
        {part3} {exercise3}
      </p>

    </div>

  )

}

const Total = () => {
  return (
    <div>
      <Content /> 
    </div>
  )

}

export default Total