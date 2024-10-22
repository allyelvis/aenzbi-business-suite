const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.get('/', (req, res) => res.send('pos-app API Running'));
app.listen(3000, () => console.log('pos-app running on port 3000'));
