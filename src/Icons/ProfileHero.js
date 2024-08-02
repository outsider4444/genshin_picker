import React, {useEffect, useState} from 'react';
import styles from "./Icon.module.css";
import axios from "axios";
import {getToken} from "../Jwt/auth";
import {FaPen} from "react-icons/fa";
import {AiOutlineCheck} from "react-icons/ai";
import {getValue} from "@testing-library/user-event/dist/utils";


const ProfileHero = ({
                         userCharactersList, setUserCharactersList, id,
                         element, heroName = "Имя", image,
                         size = 70, banned = false, marginTop = "15px", backgroundColor = '#ed7819',
                         float = "left", action, disabled
                     }) => {
    let character = null;
    if (userCharactersList){
        character = userCharactersList.find(character => character.hero.id === id);
    }
    const consta = character ? character.consta : 0;
    const level = character ? character.level : 0;
    let isLevelChanged = false;

    function increaseConst(index) {
        const nextConst = userCharactersList.map(character => {
            if (character.hero.id === index) {
                character.consta += 1;
                axios.put(`http://localhost:8080/api/v1/users_hero/${character.id}/increase`, character, {
                    headers: {
                        'Authorization': `Bearer ${getToken()}`
                    }
                })
                return {...character, consta: character.consta};
            } else {
                return character;
            }
        });
        setUserCharactersList(nextConst);
    }

    function increaseLevel(index, level) {
        const updateLevel = userCharactersList.map(character => {
            if (character.hero.id === index) {
                character.level = level;
                axios.put(`http://localhost:8080/api/v1/users_hero/${character.id}`, character, {
                    headers: {
                        'Authorization': `Bearer ${getToken()}`
                    }
                })
                return {...character, level: character.level};
            } else {
                return character;
            }
        });
        setUserCharactersList(updateLevel);
    }

    return (
        <div className={styles.roundIcon}
             style={{
                 width: size, height: size, backgroundColor: disabled ? 'gray' : banned ? "grey" : backgroundColor,
                 borderRadius: "15%", display: "flex", float: float, marginTop
             }}>
            <div>
                <div style={{
                    borderRadius: "10%", position: "absolute", textAlign: "center",
                    backgroundColor: backgroundColor !== "grey" ? "rgb(45 50 90)" : "white",
                    height: "25px", width: size - 20, marginTop: "-20px", zIndex: "-1"
                }} hidden={backgroundColor === "grey"}>
                </div>

                <div style={{
                    position: "absolute", height: "25px", width: size - 20, marginTop: "-22px",
                    color: "white", fontWeight: "bold", zIndex: "2"
                }} hidden={backgroundColor === "grey"}>
                    <span id={"levelDiv" + id} hidden={false}>{level} lvl</span>
                    <input id={"levelInput" + id} hidden={true} defaultValue={level} type="text"
                           style={{
                               width: "16px", height: "12px", borderRadius: "20%",
                               border: "none", marginLeft: "10px"
                           }}/>
                    <button id={"changeBtn" + id} className={styles.changeButton} onClick={() => {
                        document.getElementById("levelDiv" + id).hidden = !isLevelChanged;
                        document.getElementById("changeBtn" + id).hidden = !isLevelChanged;
                        document.getElementById("levelInput" + id).hidden = isLevelChanged;
                        document.getElementById("submitBtn" + id).hidden = isLevelChanged;
                        isLevelChanged = !isLevelChanged;
                    }}>
                        <FaPen style={{fontSize: "10pt", color: "white", marginLeft: "-2px", marginTop: "2px"}}/>
                    </button>
                    <button hidden={true} id={"submitBtn" + id} className={styles.changeButton} onClick={() => {
                        document.getElementById("levelDiv" + id).hidden = !isLevelChanged;
                        document.getElementById("submitBtn" + id).hidden = isLevelChanged;
                        document.getElementById("levelInput" + id).hidden = isLevelChanged;
                        document.getElementById("changeBtn" + id).hidden = !isLevelChanged;
                        let currentLevel = document.getElementById("levelInput" + id).value;
                        increaseLevel(id, currentLevel);

                        isLevelChanged = !isLevelChanged;
                    }}>
                        <AiOutlineCheck style={{
                            fontSize: "10pt",
                            fontWeight: "bolder",
                            color: "white",
                            marginLeft: "-2px",
                            marginTop: "2px"
                        }}/>
                    </button>
                </div>
                <button className={styles.constIncreaseBtn} style={{position: "absolute", zIndex: "2"}}
                        onClick={() => {
                            increaseConst(id)
                        }} hidden={backgroundColor === "grey"}>
                    +
                </button>
                <div style={{
                    display: "grid", gridTemplateColumns: "50% 35%",
                    width: size, position: "absolute", height: "2px"
                }}>
                    <div style={{
                        fontSize: size > 70 ? "auto" : "10pt", fontWeight: "bold", color: "white",
                        float: "right", textAlign: "right"
                    }}>
                        С{consta}
                    </div>
                    <div style={{
                        fontSize: size > 70 ? "auto" : "10pt", fontWeight: "bold", color: "white",
                        textAlign: "right", float: "right", zIndex: "3", marginLeft: "30px"
                    }}>
                        <img style={{zIndex: "3", width: "30px", height:"30px"}} src={element} alt=""/>
                    </div>
                </div>
            </div>
            <img onClick={disabled ? undefined : action}
                 style={{
                     borderRadius: "10%", position: "relative", marginTop: "20px", zIndex: "2"
                 }}
                 src={`${image}`}
                 alt=""/>
            <div className={styles.heroName}
                 style={{width: size, marginTop: size - 20}}>
                {heroName}
            </div>
        </div>
    )
        ;
};

export default ProfileHero;
