import { useState, useEffect } from 'react'
import axios from 'axios'
import Form from './components/Form'
import Filter from './components/Filter'
import Person from './components/Person'

const App = () => {

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilterValue, setNewFilterValue] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() =>{
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  },[])
  console.log('render', persons.length,'persons')

  const names = persons.map((person) => person.name)

  const addNewPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    if (!names.includes(newName)) {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    } else {
      alert(`${newName} is already added to phonebook`)
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilterValue(event.target.value)
    if (event.target.value.length === 0) {
      setShowAll(true)
    } else {
      setShowAll(false)
    }
  }

  const personsToShow = showAll
    ? persons
    : persons.filter(person => person.name.includes(newFilterValue))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilterValue} onChange={handleFilterChange}/>
      <h3>Add a new</h3>
      <Form 
        addNewPerson={addNewPerson} 
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />  
      <h3>Numbers</h3>
      <div>
        {personsToShow.map((person) => <Person key={person.name} person={person}/>)}
      </div>
    </div>
  )
}

export default App