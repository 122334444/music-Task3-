import React, { useState } from 'react';
import { searchMusic, likeSong, dislikeSong } from '../services/musicService';

const MusicSearch = () => {
    const [query, setQuery] = useState('');
    const [songs, setSongs] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const { data } = await searchMusic(query);
            setSongs(data);
        } catch (error) {
            alert(error.response.data);
        }
    };

    const handleLike = async (songId) => {
        try {
            const { data } = await likeSong(songId);
            setSongs(songs.map(song => song._id === songId ? data : song));
        } catch (error) {
            alert(error.response.data);
        }
    };

    const handleDislike = async (songId) => {
        try {
            const { data } = await dislikeSong(songId);
            setSongs(songs.map(song => song._id === songId ? data : song));
        } catch (error) {
            alert(error.response.data);
        }
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for music"
                />
                <button type="submit">Search</button>
            </form>
            <ul>
                {songs.map((song) => (
                    <li key={song._id}>
                        {song.title} by {song.artist}
                        <button onClick={() => handleLike(song._id)}>Like</button>
                        <button onClick={() => handleDislike(song._id)}>Dislike</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MusicSearch;