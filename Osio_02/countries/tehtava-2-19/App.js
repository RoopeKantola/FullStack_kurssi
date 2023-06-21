import { useState, useEffect } from 'react'
import countryService from './services/countries'
import Country from './components/Country'
import axios from 'axios'

const App = () => {

  const [countries, setCountries] = useState([])
  const [newFilterValue, setNewFilterValue] = useState('')
  const [showSelection, setShowSelection] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const [countriesToShow, setCountriesToShow] = useState(countries.filter(country => country['name']['common'].toLowerCase().includes(newFilterValue.toLowerCase())))

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  console.log(countriesToShow)

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilterValue(event.target.value)
    if (countries.length > 0) {
    if (countries.filter(country => country['name']['common'].toLowerCase().includes(event.target.value.toLowerCase())).length <= 10
        &&
        countries.filter(country => country['name']['common'].toLowerCase().includes(event.target.value.toLowerCase())).length > 1) {
      setShowSelection(true)
      setShowAll(false)
      setCountriesToShow(countries.filter(country => country['name']['common'].toLowerCase().includes(event.target.value.toLowerCase())))
    } else if (event.target.value.length < 1) {
      setShowSelection(false)
      setShowAll(false)
      setCountriesToShow(countries.filter(country => country['name']['common'].toLowerCase().includes(event.target.value.toLowerCase())))
    } else if (countries.filter(country => country['name']['common'].toLowerCase().includes(event.target.value.toLowerCase())).length === 1) {
      setShowSelection(true)
      setShowAll(true)
      setCountriesToShow(countries.filter(country => country['name']['common'].toLowerCase().includes(event.target.value.toLowerCase())))
    }
    else {
      setShowSelection(false)
      setShowAll(false)
      setCountriesToShow(countries.filter(country => country['name']['common'].toLowerCase().includes(event.target.value.toLowerCase())))
    }
  }
}

  const handleClick = (event) => {
    console.log(event.target.id)
    console.log(countriesToShow)
    setCountriesToShow(countriesToShow.filter(country => country['name']['common'] === event.target.id))
    setShowAll(true)
  }

  

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
                            clickHandler = {handleClick}
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
