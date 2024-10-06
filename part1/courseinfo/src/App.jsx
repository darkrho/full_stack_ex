const Header = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
    </>
  )
}

const Content = (props) => {
  let title1 = props.title1
  let title2 = props.title2
  let title3 = props.title3
  let ex1 = props.exercises1
  let ex2 = props.exercises2
  let ex3 = props.exercises3
  return (
    <div>
      <Part name={title1} exercises={ex1} />
      <Part name={title2} exercises={ex2} />
      <Part name={title3} exercises={ex3} />
    </div>
  )

}

const Part = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>

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
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Header title={course} />
      <Content
        title1={part1} title2={part2} title3={part3}
        exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App