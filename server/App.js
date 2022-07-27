require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/index');
const fileUpload = require('express-fileupload');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');

const PORT = process.env.PORT || 3002;

const app = express();
app.use(express.json());
app.use(cookieParser()); //cookie parser
app.use(cors());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));

//routing
app.use('/api', router);

// errors, last MiddleWare
app.use(errorHandler);

const start = async () => {
  try {
    console.log(`connection to MongoDB`);
    mongoose
      .connect(process.env.DB_URL, {})
      .then(() => console.log(`conection succes to mongoDB`))
      .catch((e) => console.log(`cannot connect to mongoDB ${e}`));
    app.listen(PORT, () => console.log(`server start on port ${PORT}`));
  } catch (error) {
    console.log(`Server Error ${error.message}`);
    process.exit();
  }
};

start();
