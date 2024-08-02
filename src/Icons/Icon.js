import React from 'react';
import styles from "./Icon.module.css";
import {FaPen} from "react-icons/fa";
import {AiOutlineCheck} from "react-icons/ai";

const Icon = ({ image = "https://genshin-info.ru/upload/resize_cache/iblock/9a8/w4vrp5t2uh6px1u2ovpoloa6tsglw7gh/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Klorinda.webp",
                level= 0, consta = 0,
                  size = 70, banned = false, marginTop = "15px",
                  backgroundColor = '#ed7819', float="left",
                  action, disabled, element
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
            <div style={{
                position: "absolute", height: "25px", width: size - 20, marginTop: "-22px",
                color: "white", fontWeight: "bold", zIndex: "2"
            }} hidden={backgroundColor === "grey"}>
                <span id={"levelDiv"} hidden={false}>{level} lvl</span>
            </div>
            <div style={{
                display: "grid", gridTemplateColumns: "50% 35%",
                width: size, position: "absolute", height: "2px"
            }}>
                <div style={{
                    fontSize: size > 70 ? "auto" : "10pt", fontWeight: "bold", color: "white",
                    textAlign: "right", float: "right", zIndex: "3", marginLeft: "70px"
                }}>
                    <img style={{zIndex: "3", width: "30px", height:"30px"}} src={element} alt=""/>
                </div>
            </div>
            <img
                style={{ borderRadius: "25%", position: "relative"}}
                 src={image}
                 alt=""/>
        </div>
    );
};

export default Icon;
