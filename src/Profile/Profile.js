import React, {useEffect, useState} from 'react';
import styles from './Profile.module.css';
import ProfileHero from "../Icons/ProfileHero";
import axios from "axios";

const Profile = ({token, userInfo, setUserInfo, userCharactersList, setUserCharactersList}) => {
    const [createUsersHero, setCreateUsersHero] = useState({
        "userId": 0,
        "heroId": 0,
        "level": 0,
        "consta": 0
    });
    const [heroesList, setHeroesList] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/heroes')
            .then(response => {
                setHeroesList(response.data);
            })
            .catch(error => {
                console.error("Error fetching heroes:", error);
            });
    }, [])

    const onClickHero = (id) => {
        const character = heroesList.find(c => c.id === id);
        const userCharacter = userCharactersList.find(c => c.heroId === id);
        const inArray = userCharactersList.some(c => c.heroId === id);

        if (inArray) {
            axios.delete("http://localhost:8080/api/v1/users_hero/" + userCharacter.id, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(setUserCharactersList(userCharactersList.filter(c => c.heroId !== character.id)));
        }
        else {
            let newHero = {
                "userId": userInfo.id,
                "heroId": character.id,
                "level": 0,
                "consta": 0
            }

            axios.post("http://localhost:8080/api/v1/users_hero", newHero, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(setUserCharactersList([...userCharactersList, newHero]))
        }
    }

    const listCharacter = heroesList.map(character => {
        const isInUserList = userCharactersList.some(c => c.heroId === character.id);

        return (
            <ProfileHero
                level={character.level}
                consta={character.consta}
                backgroundColor={!isInUserList ? "grey" : (character.starCount === 4 ? "#836dad" : "#ed7819")}
                disabled={false}
                size={100}
                heroName={character.name}
                key={character.id}
                image={character.photoPath}
                action={() => onClickHero(character.id)}
            />
        );
    });

    if (!userInfo) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div>
                <div className={styles.profile} style={{height: "250px"}}>
                    <div></div>
                    <div>
                        <img
                            src="https://genshin-info.ru/upload/resize_cache/iblock/9a8/w4vrp5t2uh6px1u2ovpoloa6tsglw7gh/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Klorinda.webp"
                            alt=""
                            style={{
                                width: "200px",
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
                    <div style={{height: "1px", width: "60%", background: "black"}}></div>
                </div>
                <div style={{marginLeft: "25%"}}>
                    {listCharacter}
                </div>
            </div>
        </div>
    );
};

export default Profile;
