import React from 'react';
import {useAppSelector} from "../../../app/store";
import style from './MainInfoBlock.module.css'
import {StateType} from "../../../app/app-reducer";

export const MainInfoBlock = () => {
    const weatherData = useAppSelector<StateType>(state => state.weatherData)
    const temp = Math.round(weatherData.temp)
    const max_temp = Math.round(weatherData.temp_max)
    const min_temp = Math.round(weatherData.temp_min)

    return (
        <div className={style.wrapper}>
            <h2 className={style.text1}>{weatherData.city}<span className={style.text2}>{weatherData.country}</span></h2>
            <span className={style.text1}>{`${temp} °C`}</span>
            <p className={style.description}>{`${weatherData.weather} (${weatherData.weatherExpand})`}</p>
            <p className={style.description}>{`H: ${max_temp}° L: ${min_temp}°`}</p>
        </div>
    );
};
