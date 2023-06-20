import { useState, useEffect } from 'react'
import countryService from './services/countries'
import Country from './components/Country'
import axios from 'axios'

const App = () => {

  const [countries, setCountries] = useState([])
  const [newFilterValue, setNewFilterValue] = useState('')
  const [showSelection, setShowSelection] = useState(false)
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])
  console.log('render', countries.length, 'countries')
  console.log(countries)
  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilterValue(event.target.value)
    if (countries.filter(country => country['name']['common'].toLowerCase().includes(event.target.value.toLowerCase())).length <= 10
        &&
        countries.filter(country => country['name']['common'].toLowerCase().includes(event.target.value.toLowerCase())).length > 1) {
      setShowSelection(true)
      setShowAll(false)
    } else if (event.target.value.length < 1) {
      setShowSelection(false)
      setShowAll(false)
    } else if (countries.filter(country => country['name']['common'].toLowerCase().includes(event.target.value.toLowerCase())).length === 1) {
      setShowSelection(true)
      setShowAll(true)
    }
    else {
      setShowSelection(false)
      setShowAll(false)
    }
  }

  const countriesToShow = countries.filter(country => country['name']['common'].toLowerCase().includes(newFilterValue.toLowerCase()))

  const listOfCountries = showSelection
    ? countriesToShow.map((country) => 
                          <Country 
                            key={country['name']['common']} 
                            country={country['name']['common']} 
                            fullInfo={showAll}
                            capital={country['capital']}
                            area={country['area']}
                            languages={country['languages']}
                            flag={country['flags']}
                            />)
    : "Too many matches, specify another filter"


  return (
    <div>
      <div>
        <p>find countries
        <input onChange={(handleFilterChange)}></input>
        </p>
      </div>
      <div>
       {listOfCountries}
      </div>
    </div>
  )

}

export default App
