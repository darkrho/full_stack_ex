
const Person = ({ name, number, handleDelete }) => {

  return (
    <p>
      {name}
      {number}
      <button onClick={handleDelete}>Delete Contact</button>
    </p>
  )
}

export default Person