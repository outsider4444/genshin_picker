import logo from './logo.svg';
import './App.css';
import Content from "./Picker/Content";
import Icon from "./Icons/Icon";
import React, {useEffect, useState} from "react";
import PreIcon from "./Icons/PreIcon";
import {BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom';
import Profile from "./Profile/Profile";
import Picks from "./Picks/Picks";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import axios from "axios";
import {getToken, isTokenExpired, removeToken} from "./Jwt/auth";

function App() {
    const [userInfo, setUserInfo] = useState(null);
    const [userCharactersList, setUserCharactersList] = useState([]);
    const [error, setError] = useState(null);
    let navigate = useNavigate();

    useEffect(() => {

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
        }
        else {
            setError('No token found');
        }
    }, []);

    return (
        <div className="App">
            <Routes>
                <Route path={"/*"} element={<Picks/>}/>
                <Route path={"/Profile"}
                       element={<Profile token={getToken()} userInfo={userInfo}
                                         setUserInfo={setUserInfo}
                                         userCharactersList={userCharactersList}
                                         setUserCharactersList={setUserCharactersList}/>}/>
            </Routes>
        </div>
    );
}

export default App;
