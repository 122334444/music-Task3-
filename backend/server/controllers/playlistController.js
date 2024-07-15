const Playlist = require('../models/Playlist');

exports.createPlaylist = async (req, res) => {
    try {
        const { name, thumbnail } = req.body;
        const playlist = new Playlist({ name, thumbnail, user: req.user.userId });
        await playlist.save();
        res.status(201).send(playlist);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.addSongToPlaylist = async (req, res) => {
    try {
        const { playlistId, songId } = req.params;
        const playlist = await Playlist.findById(playlistId);
        playlist.songs.push(songId);
        await playlist.save();
        res.send(playlist);
    } catch (error) {
        res.status(400).send(error.message);
    }
};