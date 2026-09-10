const mongoose = require("mongoose");

const whishlistSchema = new mongoose.Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usercreddb",
        required: true,
    },
    productid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Whishlist", whishlistSchema);