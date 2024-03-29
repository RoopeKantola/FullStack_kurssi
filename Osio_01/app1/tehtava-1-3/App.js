
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <div>
      <Header course={course}/>
      <Content 
      part1={part1.name} exercises1={part1.exercises}
      part2={part2.name} exercises2={part2.exercises}
      part3={part3.name} exercises3={part3.exercises}
      />
      <Total sum={part1.exercises+part2.exercises+part3.exercises}/>
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
        Number of exercises {props.sum}
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
        <Part text={props.part1} exercises={props.exercises1}/>
        <Part text={props.part2} exercises={props.exercises2}/>
        <Part text={props.part3} exercises={props.exercises3}/>
    </p>
  )
}

export default App