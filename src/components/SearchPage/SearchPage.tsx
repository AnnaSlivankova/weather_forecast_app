import React, {ChangeEvent, useState} from 'react';
import {Button, createTheme, TextField} from "@mui/material";
import style from './SearchPage.module.css'
import {useAppDispatch, useAppSelector} from "../../app/store";
import {getWeatherDataTC} from "../../app/app-reducer";
import {Navigate} from "react-router-dom";
import {setSearchStatus} from "./SearchReducer";

export const SearchPage = () => {
    const dispatch = useAppDispatch()
    const searchStatus = useAppSelector<boolean>(state => state.search.searchStatus)

    const [value, setValue] = useState('Minsk')
    let [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const onClickHandler = () => {
        if (value.trim() !== '') {
            dispatch(setSearchStatus (false))
            dispatch(getWeatherDataTC({q: value}))
            setValue('')
        } else {
            setError("Enter your city and click 'search'")
        }
    }

    if(!searchStatus) {
        return <Navigate to={'/forecast'}/>
    }

    return (
        <main>
            <section className={style.section}>
                <h1 className={style.text1}>Weather <span className={style.text2}>Forecast</span></h1>
                <p>Enter below a place you want to know the weather of an option from dropdown</p>
                <span className={style.input}>
                        <TextField
                            value={value}
                            onChange={onChangeHandler}
                            id="outlined-basic"
                            label="Chose location"
                            variant="outlined"
                            size={"small"}
                            color={"primary"}/>
                        <Button
                            onClick={onClickHandler}
                            variant="contained"
                            color={"secondary"}>
                            Search</Button>
                    </span>
            </section>
        </main>
    );
};
