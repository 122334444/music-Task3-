const mongoose = require('mongoose');
const mongooseAggregate = require('mongoose-aggregate-paginate-v2')

const SongSchema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    url: { type: String, required: true },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    duration: { type: Number, required: true },
    isPublish: {type: Boolean, default: true},
    owner: {type: Schema.Type.ObjectId, ref: "User"}
});

module.exports = mongoose.model('Song', SongSchema);