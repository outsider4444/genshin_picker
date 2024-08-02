import React, {useEffect, useState} from 'react';
import axios from "axios";
import {getToken} from "../Jwt/auth";
import {useNavigate} from "react-router-dom";

const Tournaments = () => {
    const [tournamentList, setTournamentList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/tournaments', {
            headers: {
                'Authorization': `Bearer ${getToken()}`
            }
        }).then(response => {
            setTournamentList(response.data);
        }).catch(error => {
            console.error("There was an error fetching the tournaments!", error);
            if (error.response) {
                // Сервер ответил с статусом, отличным от 2xx
                console.error("Response data:", error.response.data);
                console.error("Response status:", error.response.status);
                console.error("Response headers:", error.response.headers);
            } else if (error.request) {
                // Запрос был сделан, но ответа не было
                console.error("Request data:", error.request);
            } else {
                // Произошла ошибка при настройке запроса
                console.error("Error message:", error.message);
            }
        });
    }, []);
    const tournaments = tournamentList.map((tournament) =>
        <div>{tournament}</div>
    )

    return (
        <div>
            <button onClick={() => navigate("/Tournament/Create")}>Создать новый турнир</button>
            {tournaments}
        </div>
    );
};

export default Tournaments;
