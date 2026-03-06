const mongoose = require("mongoose");

const analyticsSchema = new mongoose.Schema({
    organization_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Organization",
        required: true
    },

    date: {
        type: Date,
        required: true
    },

    total_events: {
        type: Number,
        default: 0
    },

    confirmed_events: {
        type: Number,
        default: 0
    },

    loitering_count: {
        type: Number,
        default: 0
    },

    sudden_running_count: {
        type: Number,
        default: 0
    },

    restricted_area_entry_count: {
        type: Number,
        default: 0
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Analytics", analyticsSchema);