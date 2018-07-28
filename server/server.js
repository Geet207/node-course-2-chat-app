const path = require('path'); //build in module no need to install it
const express = require('express');

const publicPath = path.join(__dirname, '../public');

const port = process.env.PORT || 3000;
var app = express();
app.use(express.static(publicPath));

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};