var mongoose = require("mongoose");

var commentSchema = mongoose.Schema({
    text: String, // text itself
    author: {
        id: { //the id from the database to link to the comment section
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String //name of the user logged in
    }
});

module.exports = mongoose.model("Comment", commentSchema);