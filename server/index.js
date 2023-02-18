var express = require('express');
let app = express();
const {User} = require('./../db/index.js');
const {saveData} = require('./../db/index.js');

// app.use alway a middlewear - things to do for every req
app.use(express.static(__dirname + '/../client/dist'));
// I don't think is necessary, cause express has middle wear after 4.16.
// full-stack-review is using express 4.15 - probably to teach about middle-wear
app.use(express.json()); //-> for POST & PUT requests
app.use(express.urlencoded({ extended: false })); //-> for recognizing requests obj as str's & arr's

// res is the obj sent from the POST req
// the 1st term in .post() is the linking of the two ends
  // so '/save must also be present in reactland
app.post('/save', function (req, res) {
  // Its (req, res), and req.body, not res.body
  saveData(req.body);
  res.send();
})
// you weren't giving an end to ^^, res.send() was the key thing missing

app.listen(3333, function() {
  console.log('Server started and listening on port 3333');
});

