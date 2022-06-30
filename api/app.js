var express = require('express');
var app = express();

var cors = require("cors")
require('dotenv').config();

var testAPIRouter = require("./routes/testAPI")

const connectDB = require('./db/connect')
const products = require('./routes/products')

app.use(express.json());
app.use(cors());

//routes
app.use("/testAPI", testAPIRouter)
app.use('/api/v1/products', products);

const port = process.env.PORT || 9000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};
start();