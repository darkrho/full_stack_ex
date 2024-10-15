import { useState } from 'react'

function App() {
  // states
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  // control state name 
  const [newName, setNewName] = useState('')
  // control state phone
  const [newPhone, setNewPhone] = useState('')
  // control state search
  const [newSearch, setNewSearch] = useState('')


  // submit function 
  const handleForm = (event) => {
    // stop submit event
    event.preventDefault()

  }


  //  control the input widget and change the newName state
  const handleInputName = (event) => {
    setNewName(event.target.value)
  }

  const handleInputPhone = (event) => {
    setNewPhone(event.target.value)
  }

  const handleInputSearch = (event) => {
    setNewSearch(event.target.value)
  }

  // add name to the persons state
  const addName = () => {
    const newPerson = {
      name: newName,
      number: newPhone,
      id: persons.length + 1
    }
    // verify if name is alredy in persons state
    if (persons.some((person) => person.name === newName)) {
      window.alert(`The name ${newName} alredy exist`)
    } else {
      setPersons(persons.concat(newPerson))
      setNewName('')
    }
  }
  // filter persons with search field
  let contacts;
  if (newSearch.length > 0) {
    contacts = persons.filter((person) => person.name.startsWith(newSearch))
  } else {
    contacts = persons
  }

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with
      <input
        value={newSearch}
        onChange={handleInputSearch}
      />
      <br />
      <h2>Add one more</h2>
      <br />
      <form onSubmit={handleForm}>
        <div>
          name:
          <input
            value={newName}
            onChange={handleInputName}
          />
          <br />
          phone:
          <input
            value={newPhone}
            onChange={handleInputPhone}
          />
        </div>
        <div>
          <button
            type="submit"
            onClick={addName}
          >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        contacts.map((person, idx) => { return (<p key={idx}>{person.name} {person.number}</p>) })
      }
    </div>
  )
}
export default App
