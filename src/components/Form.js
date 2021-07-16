import React from 'react';
import axios from 'axios'

const Form = ({setWeather, city, setCity}) => {
    const getWeather = (e) => {
        e.preventDefault()
        let API_KEY = 'c3ca235f299a5ac03a9b15b27ae3fee0'
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
            .then(({data}) => setWeather(data))
            .catch(() => console.error('ведите город корректно'))
        setCity('')

    }

    const inputHandler = (e) => {
        setCity(e.target.value)
    }

    return (
        <form className='form' action="" onSubmit={getWeather}>
            <input className='form__input' type="text" onChange={inputHandler} value={city} placeholder='Enter your City'/>
            <button className='form__btn' type='submit'>Get Weather</button>
        </form>
    );
};

export default Form;

