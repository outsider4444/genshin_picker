import React from 'react';
import styles from "./Icon.module.css";

const ProfileHero = ({
                         userCharactersList, setUserCharactersList, id,
                         image = "https://genshin-info.ru/upload/resize_cache/iblock/9a8/w4vrp5t2uh6px1u2ovpoloa6tsglw7gh/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Klorinda.webp",
                         level = 0,
                         size = 70, banned = false, marginTop = "15px",
                         backgroundColor = '#ed7819', float = "left", action, disabled, heroName = "Имя"
                     }) => {
    const character = userCharactersList.find(character => character.heroId === id);
    const consta = character ? character.consta : 0;

    function increaseConst(index) {
        const nextConst = userCharactersList.map(character => {
            if (character.heroId === index) {
                return { ...character, consta: character.consta + 1 };
            } else {
                return character;
            }
        });
        setUserCharactersList(nextConst);
    }

    return (
        <div className={styles.roundIcon}
             style={{
                 width: size, height: size, backgroundColor: disabled ? 'gray' : banned ? "grey" : backgroundColor,
                 borderRadius: "10%", display: "flex", float: float, marginTop
             }}>
            <div>
                <div style={{
                    borderRadius: "10%",
                    position: "absolute",
                    textAlign: "center",
                    display: "grid",
                    alignItems: "end",
                    backgroundColor: backgroundColor !== "grey" ? "rgb(45 50 90)" : "white",
                    height: "35px",
                    width: size - 20,
                    marginTop: "-25px",
                    zIndex: "-2",
                }}>
                    <div style={{display: "grid", gridTemplateColumns: "50% 50%", columnGap: "24px"}}>
                        <input disabled value={level} type="text"
                               style={{width: "20px", height: "10px", marginBottom: "15px", marginLeft: "10px"}}
                               hidden={backgroundColor === "grey"}/>
                        <button style={{
                            width: "15px",
                            height: "15px",
                            borderRadius: "40%",
                            border: "none",
                            marginBottom: "15px",
                            fontWeight: "bold"
                        }}
                                hidden={backgroundColor === "grey"}>Р
                        </button>
                    </div>
                </div>
                <button className={styles.constIncreaseBtn} style={{position: "absolute", zIndex: "0"}}
                        onClick={() => {
                            increaseConst(id)
                        }} hidden={backgroundColor === "grey"}>
                    +
                </button>
                <div style={{display: "grid", gridTemplateColumns: "50% 40%", width: size, position: "absolute", height: "2px"}}>
                    <div style={{
                        fontSize: size > 70 ? "auto" : "10pt",
                        fontWeight: "bold",
                        color: "white",
                        float: "right",
                        textAlign: "right"
                    }}>
                        С{consta}
                    </div>
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
                borderRadius: "10%", position: "absolute",
                textAlign: "center", display: "grid",
                alignItems: "end", backgroundColor: "rgb(45 50 90)",
                height: "35px", width: size,
                marginTop: size - 15,
                zIndex: "-1"
            }}>
                <div
                    style={{fontSize: (size / 10) + 2, fontWeight: "bold", color: "white"}}>
                    {heroName}
                </div>
            </div>
        </div>
    );
};

export default ProfileHero;
