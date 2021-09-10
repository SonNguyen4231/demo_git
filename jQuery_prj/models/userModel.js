const mongoose = require("./dbConnect");

const UserSchema = mongoose.Schema(
  {
    username: {type: String },
    password: String,
    name: String,
    age: Number
  },
  { collection: "user" }
);

UserSchema.index({ username: "text"}, { unique: true});

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
