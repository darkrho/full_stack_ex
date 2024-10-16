import Person from './Person'
const Persons = ({ contacts, handleDelete }) => {
  const contactacsDisplay = contacts.map((person) => {
    return (
      <Person
        key={person.id}
        name={person.name}
        number={person.number}
        handleDelete={() => handleDelete(person.id)}
      />)
  })
  return (
    <div>
      {contactacsDisplay}
    </div>
  )
}

export default Persons