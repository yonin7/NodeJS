const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

// app.get('', (req, res) => {
//   res.send('<h1>hello</h1>');
// })
app.get('/help', (req, res) => {
  res.send('help page');
});

app.listen(3000, () => {
  console.log('server is up on port 3000');
});
