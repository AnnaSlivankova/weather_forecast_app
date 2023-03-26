import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Button, createTheme, TextField, ThemeProvider} from "@mui/material";
import {useAppDispatch} from "./store";
import {getWeatherDataTC} from "./app-reducer";
import {ForecastPage} from "../components/ForecastPage/ForecastPage";
import {Navigate, Route, Routes} from "react-router-dom";
import {SearchPage} from "../components/SearchPage/SearchPage";

function App() {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#fff'
            },
            secondary: {
                main: '#222222'
            },
        }
    })

    return (
        <div className='app'>
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route path={'/'} element={<SearchPage/>}/>
                    <Route path={'/forecast'} element={<ForecastPage/>}/>
                    <Route path={'/404'} element={<h1>404: PAGE NOT FOUND</h1>}/>
                    <Route path={'*'} element={<Navigate to={'/404'}/>}/>
                </Routes>
            </ThemeProvider>
        </div>
    );
}

export default App;
