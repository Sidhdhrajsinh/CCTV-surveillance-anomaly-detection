const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
    organization_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Organization",
        required: true
    },

    camera_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Camera",
        required: true
    },

    uploaded_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    video_path: {
        type: String,
        required: true
    },

    processing_status: {
        type: String,
        enum: ["pending", "processing", "processed", "failed"],
        default: "pending"
    },

    upload_time: {
        type: Date,
        default: Date.now
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Video", videoSchema);