import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import FilterPerson from './components/FilterPerson'
import axios from 'axios'

function App() {
  // states
  const [persons, setPersons] = useState([])
  // control search
  const [newSearch, setNewSearch] = useState("")
  // get persons from json server
  const hook = () => {
    axios.get("http://localhost:3001/persons")
      .then(response => {
        setPersons(response.data)
      })
  }
  useEffect(hook, [])
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
