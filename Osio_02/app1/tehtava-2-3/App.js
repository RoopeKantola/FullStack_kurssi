
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
      },
      {
        name: 'Test part',
        exercises: 100,
        id: 4
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
  const exerciseArray = props.parts.map((part) => {
    return part.exercises
  })
  const total = 
    exerciseArray.reduce((accumulator,currentValue) => accumulator + currentValue, 0);
  return (
    <div>
        <b>
          total of exercises {total}
        </b>
    </div>
  )
}

const Part = (props) => {
  console.log("in Part ")
  return (
    <p>
        {props.text} {props.exercises}
    </p>
      
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