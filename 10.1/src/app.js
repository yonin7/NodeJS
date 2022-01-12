const path = require('path');
const express = require('express');

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));

// app.get('', (req, res) => {
//   res.send('<h1>hello</h1>');
// });
// app.get('/help', (req, res) => {
//   res.send('help page');
// });

app.post('', (req, res) => {
  console.log(req.body);
  // create a user
  // best practice is to sent the object you created back to the server
  res.send();
});

app.delete('/d/:id', (req, res) => {
  console.log(res.params);
  //delete the user
  //send back delelted user
});

app.put('/number', (req, res) => {
  console.log('hey');
});

app.get('/ds/filter', (req, res) => {
  console.log(res.query);
});

app.listen(3000, () => {
  console.log('server is up on port 3000');
});
