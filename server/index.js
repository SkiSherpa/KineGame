var express = require('express');
var app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(3333, function() {
  console.log('Server started and listening on port 3333');
});