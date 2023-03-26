import React from 'react';
import style from "./Block.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


type BlockType = {
    icon: any,
    title: string,
    text: string,
    two: string,
}

export const Block: React.FC<BlockType> = (
    {icon, title, text, two,}
) => {
    return (
        <div className={style.container}>
            <div className={style.one}>
                <FontAwesomeIcon icon={icon} size={'1x'}/>
                <span className={style.title}>{title}</span>
            </div>
            <div className={style.cont}>
                <div className={style.two}>{two}</div>
                <div className={style.three}>{text}</div>
            </div>
        </div>
    );
};
