const mongoose = require ("mongoose");

const PostSchema = mongoose.Schema, ({
    name: {
        type : String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Posts", PostSchema);