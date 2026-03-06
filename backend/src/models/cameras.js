const mongoose = require("mongoose");

const cameraSchema = new mongoose.Schema({
    organization_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Organization",
        required: true
    },

    camera_name: {
        type: String,
        required: true,
        trim: true
    },

    location: {
        type: String,
        required: true,
        trim: true
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Camera", cameraSchema);