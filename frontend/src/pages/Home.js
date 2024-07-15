import React from 'react';
import MusicSearch from '../components/MusicSearch';
import Playlist from '../components/Playlist';

const Home = () => {
    return (
        <div>
            <h1>DTunes</h1>
            <MusicSearch />
            <Playlist />
        </div>
    );
};

export default Home;