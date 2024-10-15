
const Persons = ({ contacts }) => {

  return (
    <div>
      {
        contacts.map((person, idx) => { return (<p key={idx}>{person.name} {person.number}</p>) })
      }
    </div>
  )
}

export default Persons