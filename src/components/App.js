import React, {useState} from 'react';
import Form from "./Form"
import Weather from "./Weather"
import './App.css'

const App = () => {
    const [weather, setWeather] = useState({})
    const [city, setCity] = useState('')
    return (
        <div className='weather'>
            <div className="weather__block">
                <Form  setWeather={setWeather} city={city} setCity={setCity}/>
                {Object.keys(weather).length === 0 ? null
                    : <Weather weather={weather}/>}
            </div>

        </div>
    );
};

export default App;