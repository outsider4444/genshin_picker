import React, {useEffect, useState} from 'react';
import styles from './Profile.module.css';
import ProfileHero from "../Icons/ProfileHero";
import axios from "axios";
import {getToken} from "../Jwt/auth";

const Profile = ({heroesList, token, userInfo, userCharactersList, setUserCharactersList, elements}) => {
    const onClickHero = async (id) => {
        const hero = heroesList.find(c => c.id === id);
        let userCharacter = null;
        let inArray = null;
        if (userCharactersList){
            userCharacter = userCharactersList.find(c => c.hero.id === id);
            inArray = userCharactersList.some(c => c.hero.id === id);
        }
        if (inArray) {
            axios.delete(`http://localhost:8080/api/v1/users_hero/${userCharacter.id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(() => {
                setUserCharactersList(prevState => prevState.filter(c => c.hero.id !== character.id));
            }).catch(error => {
                console.error("Error deleting hero:", error);
            });
        } else {
            let newHero = {
                "user": {
                    "id": userInfo.id
                },
                "hero": {
                    "id": character.id
                },
                "level": 0,
                "consta": 0
            };

            axios.post("http://localhost:8080/api/v1/users_hero", newHero, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(response => {
                setUserCharactersList(prevState => [...prevState, response.data]);
            }).catch(error => {
                console.error("Error adding hero:", error);
            });
        }
    };
    const listCharacter = heroesList.map(character => {
        let isInUserList = false;
        if (userCharactersList){
            isInUserList = userCharactersList.some(c => c.hero.id === character.id);
        }


        return (
            <ProfileHero
                element={elements[character.elementType]}
                userCharactersList={userCharactersList}
                setUserCharactersList={setUserCharactersList}
                id={character.id}
                level={character.level}
                backgroundColor={!isInUserList ? "grey" : (character.starCount === 4 ? "#836dad" : "#ed7819")}
                disabled={false}
                size={140}
                image={`http://localhost:8080/api/v1/heroes/${character.id}/photo`}
                heroName={character.name}
                key={character.id}
                action={() => onClickHero(character.id)}
            />
        );
    });

    if (!userInfo) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className={styles.profile} style={{height: "250px"}}>
                <div></div>
                <div>
                    <img
                        src="https://genshin-info.ru/upload/resize_cache/iblock/9a8/w4vrp5t2uh6px1u2ovpoloa6tsglw7gh/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Klorinda.webp"
                        alt=""
                        style={{
                            width: "175px",
                            borderRadius: "50%",
                            border: "5px solid black"
                        }}
                    />
                    <div>{userInfo.username}</div>
                </div>
                <div>
                    <button className={styles.changeBtn}>Изменить профиль</button>
                </div>
            </div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <div style={{height: "1px", width: "80%", background: "black"}}></div>
            </div>
            <div className={styles.characters}>
                {listCharacter}
            </div>
        </div>
    );
};

export default Profile;
