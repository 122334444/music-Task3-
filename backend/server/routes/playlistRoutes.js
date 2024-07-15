const express = require('express');
const { createPlaylist, addSongToPlaylist } = require('../controllers/playlistController');
const router = express.Router();

router.post('/', createPlaylist);
router.post('/:playlistId/:songId', addSongToPlaylist);

module.exports = router;