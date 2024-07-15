import axios from 'axios';

const API_URL = 'http://localhost:5000/api/music';

export const searchMusic = (query) => {
    return axios.get(`${API_URL}/search`, { params: { query } });
};

export const likeSong = (songId) => {
    return axios.post(`${API_URL}/like/${songId}`);
};

export const dislikeSong = (songId) => {
    return axios.post(`${API_URL}/dislike/${songId}`);
};