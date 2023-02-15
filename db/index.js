const mongoose = require('mongoose');

// db is what you have called your database
mongoose.connect('mongodb://localhost/db');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  wins: Number
});

const User = mongoose.model('Users', UserSchema);

module.exports.User = User;