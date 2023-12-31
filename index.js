const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 4000;

const { connect } = require("./DB/connection");
connect()
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');


const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
