const express = require('express');
app = express();

const PORT = 3000;

app.use(express.static('src'));


app.listen(PORT);
