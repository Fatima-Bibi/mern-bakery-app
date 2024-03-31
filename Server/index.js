const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
dotenv.config({ path: './config.env' });

const signUpRouter = require('./routes/signuproute');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors())

// Middleware
// app.use(bodyParser.urlencoded({ extended: false }));

// var corsOptions = {
//   origin: 'http://localhost:3000/',
//   methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
//   credentials:true,
 
// }
// Routes
require('./database/connect');

app.use(signUpRouter);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});



