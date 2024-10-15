
const Total = ({ parts }) => {
  const total_ex = parts.reduce((acc, part) => acc += part.exercises, 0)

  return (
    <p><b>total of {total_ex} exercises</b></p>
  )
}

export default Total