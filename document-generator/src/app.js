const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.get('/', (req, res) => res.send('document-generator API Running'));
app.listen(3000, () => console.log('document-generator running on port 3000'));
