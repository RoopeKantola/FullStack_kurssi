import Language from "./Language"

const Country = ({country, fullInfo, capital, area, languages, flag}) => {
const langArray = Object.values(languages)
console.log(langArray)
console.log(capital)
console.log(flag)
    if (!fullInfo) {
        return (
        <div>
            {country}
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
        </div>
        )
    }
}



export default Country