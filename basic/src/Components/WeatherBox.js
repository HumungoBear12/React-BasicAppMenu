import React from 'react'

const WeatherBox = ({Temp,Weather,Day}) => {
  return (
    <div className="weather-box">
        <img src={Weather} alt="type"></img>
        <h3>{Day}</h3>
        <h6>{Temp}</h6>
    </div>
  )
}

export default WeatherBox