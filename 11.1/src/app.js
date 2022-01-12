const path = require('path');
const express = require('express');

const app = express();
const numbers = [1, 2, 3, 4, 5, 6];
app.use(express.json());

// app.use(express.static(path.join(__dirname, '../public')));

// app.get('', (req, res) => {
//   res.send('<h1>hello</h1>');
// });
// app.get('/help', (req, res) => {
//   res.send('help page');
// });

app.post('/numbers', (req, res) => {
  const id = parseInt(res.body.num);
  if (numbers.includes(id))
    return res.status(400).send(`the ${id} number not found`);
  numbers.push(id);
  res.send(numbers);
});

app.delete('/numbers/:id', (req, res) => {
  console.log(res.params);
  const id = parseInt(res.body.num);
  const index = numbers.indexOf(id);

  if (index === -1) return res.status(400).send(`the ${id} number not found`);
  res.send(numbers.splice(index, 1));
});

app.put('/numbers', (req, res) => {
  const id = parseInt(res.body.num);
  const replace = parseInt(res.body.num.replaceNum);
  const index = numbers.indexOf(id);

  if (index === -1) return res.status(400).send(`the ${id} number not found`);
  //delete the user
  //send back delelted user
  res.send(numbers.splice(index, 1));
});

app.get('/numbers/', (req, res) => {
  res.send(numbers);
  // console.log(res.query);
});

app.listen(3000, () => {
  console.log('server is up on port 3000');
});
