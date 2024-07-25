// src/utils/auth.js

import {jwtDecode} from 'jwt-decode';

export const isTokenExpired = (token) => {
    try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000; // текущий Unix timestamp в секундах
        return decoded.exp < currentTime;
    } catch (error) {
        console.error('Token is invalid or expired:', error);
        return true;
    }
};

export const getToken = () => {
    return localStorage.getItem('AccessToken');
};

export const setToken = (token) => {
    localStorage.setItem('AccessToken', token);
};

export const removeToken = () => {
    localStorage.removeItem('AccessToken');
};
