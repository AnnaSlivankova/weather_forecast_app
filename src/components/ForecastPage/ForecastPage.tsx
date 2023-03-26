import React from 'react';
import {Blocks} from "./blocks/Blocks";
import {MainInfoBlock} from "./blocks/MainInfoBlock";
import style from './ForecastPage.module.css'
import {Button} from "@mui/material";
import {Navigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/store";
import {setSearchStatus} from "../SearchPage/SearchReducer";

export const ForecastPage = () => {
    const dispatch = useAppDispatch()
    const searchStatus = useAppSelector<boolean>(state => state.search.searchStatus)

    const onClickHandler = () => {
        dispatch(setSearchStatus(true))
    }

    if(searchStatus) {
        return <Navigate to={'/'}/>
    }

    return (
        <div className={style.container}>
            <div className={style.section}>
                <MainInfoBlock/>
                <Blocks/>

                <Button
                    onClick={onClickHandler}
                    variant='text'
                    color={"secondary"}>
                    Search again
                </Button>
            </div>
        </div>
    );
};
