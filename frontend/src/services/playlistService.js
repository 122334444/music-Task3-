import axios from 'axios';

const API_URL = 'http://localhost:5000/api/playlists';

export const createPlaylist = (name, thumbnail) => {
    return axios.post(API_URL, { name, thumbnail });
};

export const addSongToPlaylist = (playlistId, songId) => {
    return axios.post(`${API_URL}/${playlistId}/${songId}`);
};