
const App = () => {
  const course = {
      name: 'Half Stack application development',
      parts: [
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
  }

  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}


const Header = (props) => {
  console.log(props)
  return (
      <h1>
        {props.course.name}
      </h1>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <p>
        Number of exercises {
          props.course.parts[0].exercises +
          props.course.parts[1].exercises +
          props.course.parts[2].exercises
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
        <Part text={props.course.parts[0].name} exercises={props.course.parts[0].exercises}/>
        <Part text={props.course.parts[1].name} exercises={props.course.parts[1].exercises}/>
        <Part text={props.course.parts[2].name} exercises={props.course.parts[2].exercises}/>
    </p>
  )
}

export default App