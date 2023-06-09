const App = () => {
  const course = 'Half Stack application development'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <div>
        <Header heading={course} />
        <Content/>
        <Total sum={exercises1+exercises2+exercises3}/>
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return (
      <h1>
        {props.heading}
      </h1>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <p>
        Number of exercises {props.sum}
    </p>
  )
}

const Part = (props) => {
  console.log("Taalla ollaan ")
  return (
    <p>
      {props.part} {props.exercises}    
    </p>
  )
}

const Content = () => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <p>
        <Part part={part1} exercises={exercises1}/>
        <Part part={part2} exercises={exercises2}/>
        <Part part={part3} exercises={exercises3}/>
    </p>
  )
}

export default App