import React, { useState } from 'react';
import { createPlaylist, addSongToPlaylist } from '../services/playlistService';

const Playlist = () => {
    const [name, setName] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [playlistId, setPlaylistId] = useState('');
    const [songId, setSongId] = useState('');

    const handleCreatePlaylist = async (e) => {
        e.preventDefault();
        try {
            const { data } = await createPlaylist(name, thumbnail);
            setPlaylistId(data._id);
        } catch (error) {
            alert(error.response.data);
        }
    };

    const handleAddSong = async (e) => {
        e.preventDefault();
        try {
            await addSongToPlaylist(playlistId, songId);
            alert('Song added to playlist');
        } catch (error) {
            alert(error.response.data);
        }
    };

    return (
        <div>
            <form onSubmit={handleCreatePlaylist}>
                <div>
                    <label>Playlist Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Thumbnail URL:</label>
                    <input type="text" value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} />
                </div>
                <button type="submit">Create Playlist</button>
            </form>

            <form onSubmit={handleAddSong}>
                <div>
                    <label>Playlist ID:</label>
                    <input type="text" value={playlistId} onChange={(e) => setPlaylistId(e.target.value)} />
                </div>
                <div>
                    <label>Song ID:</label>
                    <input type="text" value={songId} onChange={(e) => setSongId(e.target.value)} />
                </div>
                <button type="submit">Add Song to Playlist</button>
            </form>
        </div>
    );
};

export default Playlist;