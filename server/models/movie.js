const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    year: {
        type: Number,
        required: [true, "Year is required"],
        min: [1900, "Movie must be more recent than 1900"]
    }
}, {timestamps: true});

mongoose.model("Movie", MovieSchema);