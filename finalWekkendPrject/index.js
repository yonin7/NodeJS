const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const route = require('./routes/index.routes');

require('./db/mongoose');
// const publicDirectoryPath = path.join(__dirname, 'client/build');

// app.use(express.static(publicDirectoryPath));
app.use(cors());
app.use(express.json());

app.use('/api/', route);

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/client/build/index.html'));
// });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
