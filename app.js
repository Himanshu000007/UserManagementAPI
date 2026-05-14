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


// SERVER
app.listen(5000, () => {
  console.log("Server running on port 5000");
});