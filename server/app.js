const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const mongoose = require("mongoose");
require("dotenv").config();

const cors = require('cors');

app.use(cors());


// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

// Connect the database
async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.database, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
connectToDatabase();

const ConncetorRouter = require('./collection/conncetor/routes/conncetorRoute');
const TypeRouter = require('./collection/type/routes/typeRoutes');

app.use("/conncetor", ConncetorRouter);
app.use("/type_conncetor", TypeRouter);



module.exports = app;


