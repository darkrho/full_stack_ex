import { useState } from 'react'
import personsServices from '../services/persons'

const PersonForm = ({ persons, setPersons }) => {
  // control state name 
  const [newName, setNewName] = useState('')
  // control state phone
  const [newPhone, setNewPhone] = useState('')

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


  // add name to the persons state
  const addName = () => {
    const newPerson = {
      name: newName,
      number: newPhone,
    }
    // verify if name is alredy in persons state
    if (persons.some((person) => person.name === newName)) {
      if (persons.some((person) => person.number !== newPhone)) {
        // change the phone number
        if (window.confirm("Do you really want to change the number of the contact?")) {
          // update the contact on the server
          let personUpdate = persons.filter((person) => person.name === newName)[0]
          console.log(personUpdate)
          personUpdate = { ...personUpdate, number: newPhone }
          personsServices
            .update(personUpdate.id, personUpdate)
            // update the persons state
            .then(response => {
              setPersons(persons.map(person => person.id === response.data.id ? response.data : person))
            })
        }
      } else {
        window.alert(`The name ${newName} alredy exist`)
      }
    } else {
      // add to json server
      personsServices.create(newPerson)
        .then(response => {
          // add to state persons
          setPersons(persons.concat(response.data))
        })
      setNewName('')
      setNewPhone('')
    }
  }
  return (
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
  )
}

export default PersonForm

