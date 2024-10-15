import { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import FilterPerson from './components/FilterPerson'

function App() {
  // states
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  // control search
  const [newSearch, setNewSearch] = useState("")
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
      <FilterPerson newSearch={newSearch} setNewSearch={setNewSearch} />
      <h2>Add one more</h2>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <Persons contacts={contacts} />
    </div>
  )
}
export default App
