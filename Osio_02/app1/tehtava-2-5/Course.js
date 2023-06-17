
const Courses = (props) => {
    console.log("in Courses")
    return (
      <div>
      {props.courses.map((course) => 
        <div key={course.id}>
          <Course course={course}/>
        </div>)}
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
        <h2>
          {props.name}
        </h2>
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

  export default Courses 
  