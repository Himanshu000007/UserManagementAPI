require("dotenv").config();
const express = require("express");

const app = express();

const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");
connectDB();

const loggerMiddleware = require("./middlewares/loggerMiddleware");
const errorMiddleware = require("./middlewares/errorMiddleware");


// APP LEVEL MIDDLEWARES
app.use(express.json());

app.use(loggerMiddleware);


// ROUTES
app.use("/users", userRoutes);
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
// SERVER
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});