import React from 'react';

const Weather = ({weather}) => {
    const getTime = (times) => {
        let time = new Date(times)
        let hours = time.getHours()
        let minutes = time.getMinutes()
        if (minutes < 10) {
            minutes = `0${minutes}`
        }
        if (hours < 10) {
            hours = `0${hours}`
        }
        return `${hours} : ${minutes}`
    }
    return (
        <div>

            <p className='title' >{weather.name}</p>
            <p className='time'>time : {getTime(weather.dt * 1000)}</p>

            <div className="type">
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather" />
                <p>Temperature : {Math.round(weather.main.temp - 273.15)}°C</p>
            </div>

            <div className="speed">
                <p>Weather Type : {weather.weather.map(el => {
                    return el.description
                })}
                </p>
                <p>Wind Speed : {weather.wind.speed} m / s </p>
            </div>
            <div className="sun">
                <p> Sunrise : {getTime(weather.sys.sunrise * 1000)} </p>

                <p>Sunset : {getTime(weather.sys.sunset * 1000)} </p>
            </div>

        </div>
    );
};

export default Weather;