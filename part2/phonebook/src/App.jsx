import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import FilterPerson from './components/FilterPerson'
import personsServices from './services/persons'
import Notification from './components/Notification'
import ErroNotifications from './components/ErrorNotifications'

function App() {
  // states
  const [persons, setPersons] = useState([])
  // control search
  const [newSearch, setNewSearch] = useState("")
  // message for added persons
  const [message, setMessage] = useState(null)
  // error messages
  const [errorMessage, setErrorMessage] = useState(null)
  // get persons from json server
  const hook = () => {
    personsServices.getAll()
      .then(response => {
        setPersons(response.data)
      })
  }
  useEffect(hook, [])
  // filter persons with search field
  const filterPerson = () => {
    let contacts;
    if (newSearch.length > 0) {
      contacts = persons.filter((person) => person.name.startsWith(newSearch))
    } else {
      contacts = persons
    }
    return contacts
  }


  const handleDelete = (id) => {
    if (window.confirm("Do you really want to delete the contact?")) {
      personsServices
        .erase(id)
        .then(
          response => {
            setPersons(persons.filter(person => person.id !== response.id))
          }
        )
    }

  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <ErroNotifications message={errorMessage} />
      filter shown with
      <FilterPerson newSearch={newSearch} setNewSearch={setNewSearch} />
      <h2>Add one more</h2>
      <PersonForm persons={persons} setPersons={setPersons} setMessage={setMessage} setErrorMessage={setErrorMessage} />
      <h2>Numbers</h2>
      <Persons contacts={filterPerson()} handleDelete={handleDelete} />
    </div>
  )
}
export default App
