const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    video_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video",
        required: true
    },

    camera_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Camera",
        required: true
    },

    event_type: {
        type: String,
        enum: ["loitering", "sudden_running", "restricted_area_entry"],
        required: true
    },

    timestamp_seconds: {
        type: Number,
        required: true
    },

    risk_level: {
        type: String,
        enum: ["low", "medium", "high"],
        required: true
    },

    person_id: {
        type: String
    },

    confidence: {
        type: Number,
        required: true
    },

    status: {
        type: String,
        enum: ["detected", "reviewed"],
        default: "detected"
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Event", eventSchema);