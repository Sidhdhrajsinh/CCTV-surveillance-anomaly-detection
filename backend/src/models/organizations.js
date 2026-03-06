const mongoose = require("mongoose");

const organizationSchema = new mongoose.Schema({
    organization_name: {
        type: String,
        required: true,
        trim: true
    },

    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    users: {
        type: Array,
        default: []
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Organization", organizationSchema);