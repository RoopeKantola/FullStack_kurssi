import { useState, useEffect } from 'react'
import Form from './components/Form'
import Filter from './components/Filter'
import Person from './components/Person'
import personService from './services/persons'

const App = () => {

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilterValue, setNewFilterValue] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() =>{
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  },[])

  const names = persons.map((person) => person.name)

  const addNewPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    if (!names.includes(newName)) {
      personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
    } else {
      if(window.confirm(`${newName} is already added to phonebook. Do you want to replace the old number with a new one?`)) {updateNumber(persons.find(p => p.name === newName).id) } else {return false}
    }
  }

  const deleteContactFromDb = (id) => {
    const contact = persons.find(p => p.id === id)
    personService
          .deletePerson(contact.id)
          .then(() => {
            setPersons(persons.filter(p => p.id !== id))

          })
  }

  const updateNumber = (id) => {
    const person = persons.find(p => p.id === id)
    const changedPerson = { ...person, number: newNumber}
  
    personService
      .update(id, changedPerson)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
      })
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
        {personsToShow.map((person) => <Person key={person.name} person={person} deleteContact={()=> {if(window.confirm(`Do you want to delete ${person.name} from the phonebook`)) {deleteContactFromDb(person.id)} else {return false}}}/>)}
      </div>
    </div>
  )
}

export default App