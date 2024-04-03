const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title: { type: String },
    category: { type: String },
    status: { type: String },
    image: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Image' }],
    description: { type: String },
    active: { type: Boolean, default: true },
});

const News = mongoose.model('News', newsSchema);

module.exports = News;