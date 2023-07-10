const express = require('express');
const SerialPort = require('serialport').SerialPort;
const bodyParser = require('body-parser');

const app = express();
const port = 5173;
const serialPort = new SerialPort({
  path: 'COM8',
  baudRate: 9600,
});

app.use(bodyParser.json());

app.post('/send', (req, res) => {
  const data = req.body.data;
  console.log('Data received:', data);
  serialPort.write(data, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.status(200).send('Data sent successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
