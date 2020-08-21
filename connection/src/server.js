const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.post('/app', (req, res) => {
  console.log(req);
  res.send({
    message: 'connection port OK'
  });
});

app.listen(process.env.PORT || '3000', () => {
  console.log('Application Started');
});