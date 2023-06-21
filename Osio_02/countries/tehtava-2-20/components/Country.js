import Language from "./Language"

const Country = ({country, fullInfo, capital, area, languages, flag, clickHandler, temperature, icon, wind}) => {
const langArray = Object.values(languages)

    if (!fullInfo) {
        return (
        <div>
            {country} <button id={country} onClick={clickHandler}>show</button>
        </div>
        )
    } else {
        return (
        <div>
            <h1>{country}</h1>
                <p>
                    capital {capital.map(city => city + ' ')} <br/>
                    area {area}
                </p>
                <div>
                    <h3>languages</h3>
                    <ul>
                        {langArray.map(lang => <Language key={lang} language={lang}></Language>)}
                    </ul>
                </div>
                <div>
                    <img src={flag['png']}></img>
                </div>
                <div>
                    <h3>
                        Weather in {capital[0]}
                    </h3>
                    temperature {temperature} Celcius <br/>
                    <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`}></img> <br/>
                    wind {wind} m/s
                </div>
        </div>
        )
    }
}



export default Country