import React from 'react';

const Weather = props => (
    <div className="weather-info">
    {props.temp && <div>Temperature : {props.temp}</div>}
    {props.humidity && <div>Humidity : {props.humidity}</div>}
    {props.desc && <div> Condition : {props.desc}</div>}
    {props.city && props.country && <div> Location : {props.city} , {props.country}</div>}
    {props.error && <div>{props.error}</div>}
    </div>
);

export default Weather