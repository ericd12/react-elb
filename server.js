const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.HTTP_PORT || 5000;

app.use(express.static(path.join(__dirname, 'client', 'build')));


app.get('/', (req, res) => {
    res.send('flowers smell nice');
  });

  app.get('/flower', (req, res) => {
    res.json({
      name: 'Dandelion',
      color: 'Blue-ish'
    });
  });

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});