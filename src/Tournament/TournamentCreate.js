import React, {useEffect, useState} from 'react';
import Icon from "../Icons/Icon";
import axios from "axios";

const TournamentCreate = ({elements}) => {
    const [heroesTournamentList, setHeroesTournamentList] = useState([]);
    const [heroesTournamentToBanList, setHeroesTournamentToBanList] = useState([]);
    const [heroesTournamentToImmuneList, setHeroesTournamentToImmuneList] = useState([]);
    const [bannedHeroes, setBannedHeroes] = useState([]);
    const [immuneHeroes, setImmuneHeroes] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/heroes/heroTournamentInfo")
            .then(response => {
                const heroesWithEnabled = response.data.map(hero => ({ ...hero, enabled: true }));

                setHeroesTournamentList(response.data);
                setHeroesTournamentToBanList(response.data);
                setHeroesTournamentToImmuneList(heroesWithEnabled);
            })
            .catch(error => {
                console.error("Error fetching heroes tournament info:", error);
            });
    }, []);

    function checkHeroIntoBothList(){
        console.log(immuneHeroes);
        console.log(bannedHeroes);
    }

    const addBannedHero = (index) => {
        const updatedHeroes = heroesTournamentToBanList.map(hero => {
            if (hero.id === index) {
                return { ...hero, enabled: !hero.enabled };
            }
            return hero;
        });

        setHeroesTournamentList(updatedHeroes);
        setHeroesTournamentToBanList(updatedHeroes);

        const heroToToggle = updatedHeroes.find(hero => hero.id === index);
        if (!heroToToggle.enabled) {
            setBannedHeroes([...bannedHeroes, heroToToggle]);
        } else {
            setBannedHeroes(bannedHeroes.filter(hero => hero.id !== index));
        }
        checkHeroIntoBothList()
    };

    const addImmuneHero = (index) => {
        const updatedHeroes = heroesTournamentToImmuneList.map(hero => {
            if (hero.id === index) {
                return { ...hero, enabled: !hero.enabled };
            }
            return hero;
        });

        setHeroesTournamentToImmuneList(updatedHeroes);
        setHeroesTournamentList(updatedHeroes);

        const heroToToggle = updatedHeroes.find(hero => hero.id === index);
        if (!heroToToggle.enabled) {
            setImmuneHeroes([...immuneHeroes, heroToToggle]);
        } else {
            setBannedHeroes(immuneHeroes.filter(hero => hero.id !== index));
        }
        checkHeroIntoBothList()
    };

    const listItemsToImmune = heroesTournamentToImmuneList.map((character) => (
        <Icon
            key={character.id}
            level={character.level}
            consta={character.consta}
            backgroundColor={character.enabled ? "grey" : (character.starCount === 4 ? "#836dad" : "#ed7819")}
            size={100}
            image={`http://localhost:8080/api/v1/heroes/${character.id}/photo`}
            element={elements[character.elementType]}
            action={() => addImmuneHero(character.id)}
        />
    ));

    const listItemsToBanned = heroesTournamentToBanList.map((character) => (
        <Icon
            key={character.id}
            level={character.level}
            consta={character.consta}
            backgroundColor={!character.enabled ? "grey" : (character.starCount === 4 ? "#836dad" : "#ed7819")}
            size={100}
            image={`http://localhost:8080/api/v1/heroes/${character.id}/photo`}
            element={elements[character.elementType]}
            action={() => addBannedHero(character.id)}
        />
    ));

    return (
        <div style={{alignItems: "center", justifyItems: "center", fontSize: "14pt"}}>
            <div style={{
                height: "150px",
                marginLeft: "15%",
                marginRight: "15%",
                marginTop: "10px",
                border: "1px solid #6a737b",
                borderRadius: "25px",
            }}>
                <div>
                    <label htmlFor="">Открытый? </label>
                    <input type="checkbox"/> <br/>
                    <label htmlFor="">Таймер (на человека)</label>
                     <input type="time"/> <br/>
                </div>
                <button style={{
                    float: "right",
                    marginRight: "15px",
                    marginTop: "-50px",
                    borderRadius: "8px",
                    color: "#6a737b",
                    width: "100px",
                    backgroundColor: "white",
                    border: "1px solid #6a737b",
                    fontSize: "14pt",
                }}>
                    Создать
                </button>
            </div>
            <div style={{
                display: "grid",
                marginLeft: "10px",
                marginRight: "5px",
                gridTemplateColumns: "45% 45%",
                columnGap: "5%"
            }}>
                <div>
                    Выберите имунных персонажей: <br/>
                    <div style={{
                        display: "flex",
                        flexWrap: "wrap",
                        height: "100%",
                        marginTop:"5px",
                        border: "1px solid #6a737b",
                        paddingLeft: "5px",
                        borderRadius: "25px"
                    }}>
                        {listItemsToImmune}
                    </div>
                </div>
                <div>
                    Выберите перманентно забанненых персонажей: <br/>
                    <div style={{
                        display: "flex",
                        flexWrap: "wrap",
                        height: "100%",
                        marginTop:"5px",
                        border: "1px solid #6a737b",
                        paddingLeft: "5px",
                        borderRadius: "25px"
                    }}>{listItemsToBanned}</div>
                </div>
            </div>
        </div>
    );
};

export default TournamentCreate;
