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
// a save fn to save the data
let saveData = (playerData) => {
  // console.log(playerData); //-> {didWin:0, player:''}
  const newPlayerData = new User({
    username: playerData.player,
    wins: playerData.didWin
  })
  newPlayerData.save((err, res) => {
    if (err) {
      return console.log('db, newPlayer.save, err', err);
    }
  })
}

// get past player data from db
let getData = () => {
  return User.find();
}

module.exports.saveData = saveData;
module.exports.getData = getData;
module.exports.User = User;