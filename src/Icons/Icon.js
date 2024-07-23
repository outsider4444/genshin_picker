import React from 'react';
import styles from "./Icon.module.css";

const Icon = ({ image = "https://genshin-info.ru/upload/resize_cache/iblock/9a8/w4vrp5t2uh6px1u2ovpoloa6tsglw7gh/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Klorinda.webp",
                level= 0, consta = 0,
                  size = 70, banned = false, marginTop = "15px",
                  backgroundColor = '#ed7819', float="left",
                  action, disabled
}) => {
    return (
        <div onClick={disabled ? undefined :action}
            className={styles.roundIcon}
            style={{
                width: size,
                height: size,
                backgroundColor: disabled ? 'gray' : banned? "grey" : backgroundColor ,
                borderRadius: "25%",
                display: "flex",
                float: float,
                marginTop
            }}
        >
            <img
                style={{ borderRadius: "25%", position: "relative"}}
                 src={image}
                 alt=""/>
            <div style={{borderRadius: "45%", position: "absolute", textAlign:"center", height:size > 70 ? "20px": "20px", width:size > 70 ? "50px": "40px", backgroundColor: "brown",
                marginTop: size > 70 ? "90px": "60px"}}>
                <div style={{ fontSize:size > 70 ? "auto": "10pt", fontWeight:"bold", color:"white"}}>{level}|{consta}</div>
            </div>
        </div>
    );
};

export default Icon;
