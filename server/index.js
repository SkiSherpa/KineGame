var express = require('express');
let app = express();
const {User} = require('./../db/index.js');
// const cors = require('cors');

//use cors to allow cross origin resource sharing
// app.use(
//   cors({
//     origin: 'http://localhost:3333',
//     credentials: true,
//   })
// );
// app.use alway a middlewear - things to do for every req
app.use(express.static(__dirname + '/../client/dist'));
// I don't think is necessary, cause express has middle wear after 4.16.
// full-stack-review is using express 4.15 - probably to teach about middle-wear
app.use(express.json()); //-> for POST & PUT requests
app.use(express.urlencoded({ extended: false })); //-> for recognizing requests obj as str's & arr's

// res is teh obj sent from the POST req
app.post('/save', function (err, res) {
  console.log('serverland, res ');
  // try deleting 17/18 to see if it works with out it

  // const newPlayerData = {
  //   DidWin: res.body.didWin,
  //   Player: res.body.player
  // };
  res.send('1');
})


app.listen(3333, function() {
  console.log('Server started and listening on port 3333');
});

