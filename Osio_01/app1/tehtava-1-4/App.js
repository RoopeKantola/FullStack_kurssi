
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
]


  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total sum={parts}/>
    </div>
  )
}


const Header = (props) => {
  console.log(props)
  return (
      <h1>
        {props.course}
      </h1>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <p>
        Number of exercises {
          props.sum[0].exercises +
          props.sum[1].exercises +
          props.sum[2].exercises
        }
    </p>
  )
}

const Part = (props) => {
  console.log("Taalla ollaan ")
  return (
    <div>
        {props.text} {props.exercises}
    </div>
      
  )
}

const Content = (props) => {
  return (
    <p>
        <Part text={props.parts[0].name} exercises={props.parts[0].exercises}/>
        <Part text={props.parts[1].name} exercises={props.parts[1].exercises}/>
        <Part text={props.parts[2].name} exercises={props.parts[2].exercises}/>
    </p>
  )
}

export default App