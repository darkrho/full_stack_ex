const Header = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
    </>
  )
}

const Content = (props) => {
  const part1 = [props.parts[0].name, props.parts[0].exercises]
  const part2 = [props.parts[1].name, props.parts[1].exercises]
  const part3 = [props.parts[2].name, props.parts[2].exercises]
  return (
    <div>
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
    </div>
  )

}

const Part = (props) => {
  const [name, ex] = props.part
  return (
    <p>{name} {ex}</p>

  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.total}</p>
    </>
  )

}

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

  const total_ex = course.parts.reduce((acc, part) => {
    acc += part.exercises
    return acc
  }, 0)
  return (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total total={total_ex} />
    </div>
  )
}

export default App