import { useState } from 'react'

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