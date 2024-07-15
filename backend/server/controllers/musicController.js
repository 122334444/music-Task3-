const Song = require('../models/Song');

exports.searchMusic = async (req, res) => {
    try {
        const { query } = req.query;
        const songs = await Song.find({ title: new RegExp(query, 'i') });
        res.send(songs);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.likeSong = async (req, res) => {
    try {
        const { songId } = req.params;
        const song = await Song.findById(songId);
        song.likes += 1;
        await song.save();
        res.send(song);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.dislikeSong = async (req, res) => {
    try {
        const { songId } = req.params;
        const song = await Song.findById(songId);
        song.dislikes += 1;
        await song.save();
        res.send(song);
    } catch (error) {
        res.status(400).send(error.message);
    }
};