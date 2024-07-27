import React from 'react';
import styles from "./Icon.module.css";

const ProfileHero = ({
                         image = "https://genshin-info.ru/upload/resize_cache/iblock/9a8/w4vrp5t2uh6px1u2ovpoloa6tsglw7gh/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Klorinda.webp",
                         level = 0, consta = 0,
                         size = 70, banned = false, marginTop = "15px",
                         backgroundColor = '#ed7819', float = "left", action, disabled, heroName = "Имя"
                     }) => {
    return (
        <div className={styles.roundIcon}
             style={{
                 width: size, height: size, backgroundColor: disabled ? 'gray' : banned ? "grey" : backgroundColor,
                 borderRadius: "10%", display: "flex", float: float, marginTop
             }}>
            <div>
                <div style={{position: "absolute"}}>
                    <button className={styles.constIncreaseBtn}>
                        +
                    </button>
                </div>
                <div style={{position: "absolute", float: "right", textAlign: "right", width: "50px"}}>
                    <div style={{
                        fontSize: size > 70 ? "auto" : "10pt",
                        fontWeight: "bold",
                        color: "white",
                        float: "right",
                        textAlign: "right"
                    }}>
                        С{consta}
                    </div>
                </div>
                <div style={{position: "absolute", float: "right", textAlign: "right", width: "80px"}}>
                    <div style={{
                        fontSize: size > 70 ? "auto" : "10pt",
                        fontWeight: "bold",
                        color: "white",
                        textAlign: "right",
                        float: "right"
                    }}>
                        F
                    </div>
                </div>
            </div>
            <img onClick={disabled ? undefined : action}
                 style={{borderRadius: "10%", position: "relative", marginTop: "20px", zIndex: "1"}} src={image}
                 alt=""/>
            <div style={{
                borderRadius: "10%",
                position: "absolute",
                textAlign: "center",
                display: "grid",
                gridTemplateColumns: "20% 80%",
                alignItems: "end",
                backgroundColor: "rgb(45 50 90)",
                height: "35px",
                width: "100px",
                marginTop: size > 70 ? "90px" : "60px",
                zIndex: "-1"
            }}>
                <button className={styles.constIncreaseBtn}>
                    +
                </button>
                <div
                    style={{fontSize: size > 70 ? "auto" : "10pt", fontWeight: "bold", color: "white"}}>
                    {heroName}
                </div>
            </div>
        </div>
    );
};

export default ProfileHero;
