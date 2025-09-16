const express = require("express");
const tourRouter = require('./routes/tourRouter');
const userRouter = require('./routes/userRouter');
const morgan = require('morgan');
const auth = require('./middleware/auth');

const app = express();

app.use(morgan('tiny'));
// Middleware to parse JSON
app.use(express.json());


app.use('/tours', tourRouter);

app.use('/users', userRouter)


const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});