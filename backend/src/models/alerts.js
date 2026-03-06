const mongoose = require("mongoose");

const alertSchema = new mongoose.Schema({
    event_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
        required: true
    },

    verified_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    status: {
        type: String,
        enum: ["confirmed", "false_positive", "pending"],
        default: "pending"
    },

    review_time: {
        type: Date
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Alert", alertSchema);