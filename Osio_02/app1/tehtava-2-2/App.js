
const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
  console.log("in App")
  return (
    <div>
      <Course course={course}/>
    </div>
  )
}

const Course = (props) => {
  console.log("in Course")
  return (
    <div>
        <Header name={props.course.name}/>
        <Content parts={props.course.parts}/>
        <Total parts={props.course.parts}/>
    </div>
  )
}


const Header = (props) => {
  console.log("in Header")
  return (
      <h1>
        {props.name}
      </h1>
  )
}

const Total = (props) => {
  console.log("in Total")
  let sum = 0
  props.parts.map((part) => {
    sum+=part.exercises
  })
  return (
    <p>
        Number of exercises {sum}
    </p>
  )
}

const Part = (props) => {
  console.log("in Part ")
  return (
    <div>
        {props.text} {props.exercises}
    </div>
      
  )
}

const Content = (props) => {
  console.log("in Content")
  return (
    <div>
      {props.parts.map((part) => 
        <div key={part.id}>
          <Part text={part.name} exercises={part.exercises}/>
        </div>)}
    </div> 
  )
}

export default App