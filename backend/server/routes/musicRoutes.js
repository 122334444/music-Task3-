const express = require('express');
const { searchMusic, likeSong, dislikeSong } = require('../controllers/musicController');
const router = express.Router();

router.get('/search', searchMusic);
router.post('/like/:songId', likeSong);
router.post('/dislike/:songId', dislikeSong);

module.exports = router;