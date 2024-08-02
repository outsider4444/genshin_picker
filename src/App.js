import './App.css';
import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Link, Route, Routes, useNavigate} from 'react-router-dom';
import Profile from "./Profile/Profile";
import Picks from "./Picks/Picks";
import axios from "axios";
import {getToken, isTokenExpired, removeToken} from "./Jwt/auth";

import Cryo from "./Images/Cryo.png";
import Pyro from "./Images/Pyro.png";
import Electro from "./Images/Electro.png";
import Anemo from "./Images/Anemo.png";
import Dendro from "./Images/Dendro.png";
import Geo from "./Images/Geo.png";
import Hydro from "./Images/Hydro.png";
import Tournaments from "./Tournament/Tournaments";
import TournamentCreate from "./Tournament/TournamentCreate";

function App() {

    const [heroesList, setHeroesList] = useState([]);
    const [userInfo, setUserInfo] = useState(null);
    const [userCharactersList, setUserCharactersList] = useState([]);
    const [error, setError] = useState(null);
    let navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/heroes')
            .then(response => {
                setHeroesList(response.data);
            })
            .catch(error => {
                console.error("Error fetching heroes:", error);
            });
        const token = getToken();
        if (token && isTokenExpired(token)) {
            removeToken();
            navigate('/Auth/Login');
        }
        if (token) {
            axios.get('http://localhost:8080/api/v1/user', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(response => {
                setUserInfo(response.data);
                setUserCharactersList(response.data.userCharacters);
            }).catch(error => {
                setError(error);
            });
        } else {
            setError('No token found');
        }
    }, []);

    const elements = {
        "Cryo": Cryo,
        "Geo": Geo,
        "Pyro": Pyro,
        "Electro": Electro,
        "Dendro": Dendro,
        "Anemo": Anemo,
        "Hydro": Hydro
    }
    return (
        <div className="App">
            <div style={{
                height: "75px",
                width: "90%",
                marginRight: "5%",
                marginTop: "5px",
                marginLeft: "5%",
                borderRadius: "15px",
                backgroundColor: "grey"
            }}>
                <Link to={"/"}>Главная</Link>
                <Link to={"/Tournaments"}>Турниры</Link>

                <Link to={"/Profile"}>Профиль</Link>
                <Link to={"/Login"}>Выход</Link>
            </div>
            <Routes>
                <Route path={"/*"} element={<Picks elements={elements} heroesList={heroesList}/>}/>
                <Route path={"/Tournaments"} element={<Tournaments/>}/>
                <Route path={"/Tournament/Create"} element={<TournamentCreate
                    elements={elements}
                />}/>
                <Route path={"/Profile"}
                       element={<Profile elements={elements}
                                         heroesList={heroesList} token={getToken()} userInfo={userInfo}
                                         setUserInfo={setUserInfo}
                                         userCharactersList={userCharactersList}
                                         setUserCharactersList={setUserCharactersList}/>}/>
            </Routes>
        </div>
    );
}

export default App;
