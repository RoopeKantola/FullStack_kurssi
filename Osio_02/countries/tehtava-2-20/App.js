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
  const [weather, setWeather] = useState(null)
  const [weatherData, setWeatherData] = useState([])
  const [temperature, setTemperature] = useState('')
  const [icon, setIcon] = useState('02d')
  const [wind, setWind] = useState('not available')


  const api_key = process.env.REACT_APP_API_KEY

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  useEffect(() => {
    console.log('useEffect 2 running... weather is now', weather)
    if (weather) {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=${api_key}&units=metric`)
      .then(response => {
        console.log('response.data: ',response.data)
        setWeatherData(response.data)
        setTemperature(response.data['main']['temp'])
        setIcon(response.data['weather'][0]['icon'].toString())
        setWind(response.data['wind']['speed'].toString())
        console.log('this is icon', icon)
        }) 
      }
    }, [weather])

  console.log(countriesToShow)
  console.log("this is weatherData", weatherData)

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
      console.log("tässä kohtaa ollaan nyt")
      const selectedCountry = countries.filter(country => country['name']['common'].toLowerCase().includes(event.target.value.toLowerCase()))
      console.log(weather, "ennen", selectedCountry[0]['capital'])
      const stringWeather = selectedCountry[0]['capital'][0].toString()
      setWeather(stringWeather)
      console.log(weather, "jälkeen")
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
    setWeather(countriesToShow.filter(country => country['name']['common'] === event.target.id)[0]['capital'][0].toString())
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
                            temperature= {temperature}
                            icon= {icon}
                            wind= {wind}
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
