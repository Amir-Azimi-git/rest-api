const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    mobile: String,
    wallet: {
        type: Number,
        default: 0
    },
    email: String,
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;