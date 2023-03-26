import React from 'react';
import {useAppSelector} from "../../../app/store";
import style from './Blocks.module.css';
import {
    getCloudiness,
    getFeelsTemp,
    getHumidityValue, getPressureValue,
    getSunTime, getVisibilityValue,
    getWindDirection
} from "../../../utilities/utilities";
import {
    faDroplet, faEye, faGauge,
    faMoon,
    faSun,
    faTemperatureHalf, faWater,
    faWind
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Block} from "./Block";
import {StateType} from "../../../app/app-reducer";

export const Blocks = () => {
    const weatherData = useAppSelector<StateType>(state => state.weatherData)

    const sunrise = getSunTime(weatherData.sunrise)
    const sunset = getSunTime(weatherData.sunset)
    const windSpeed = Math.round(weatherData.wind_speed)
    const windGust = Math.round(weatherData.wind_gust)
    const windDirection = getWindDirection(weatherData.wind_deg)
    const feelsLike = Math.round(weatherData.feels_like)
    const feelsTemp = getFeelsTemp(weatherData.temp, weatherData.feels_like)
    const humidityValue = getHumidityValue(weatherData.humidity)
    const cloudinessValue = getCloudiness(weatherData.cloudiness)
    const pressureValue = getPressureValue(weatherData.pressure)
    const visibilityValue = getVisibilityValue(weatherData.visibility)

    return (
        <div>
            <div className={style.wrapper}>
                <div className={style.cont}>
                    <div className={style.containerSun}>
                        <FontAwesomeIcon icon={faSun} size={'2x'}/>
                        <div>{sunrise}</div>
                    </div>
                    <div className={style.containerSun}>
                        <FontAwesomeIcon icon={faMoon} size={'2x'}/>
                        <div>{sunset}</div>
                    </div>
                </div>
                <Block icon={faWind} title={'Wind'} two={`${windSpeed} km/h`} text={`${windDirection}, gust ${windGust} km/h`}/>
                <Block icon={faTemperatureHalf} title={'Feels like'} two={`${feelsLike}°`} text={feelsTemp}/>
                <Block icon={faWater} title={'Humidity'} two={`${weatherData.humidity} %`} text={humidityValue}/>
                <Block icon={faDroplet} title={'Precipitation'} two={`${weatherData.cloudiness}%`} text={`${cloudinessValue}, clouds at ${weatherData.cloudiness}%`}/>
                <Block icon={faGauge} title={'Pressure'} two={`${weatherData.pressure} hPa`} text={pressureValue}/>
                <Block icon={faEye} title={'Visibility'} two={`${weatherData.visibility} km`} text={visibilityValue}/>
            </div>
        </div>
    );
};



