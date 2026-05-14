const express = require("express");

const app = express();

const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");
connectDB();

const loggerMiddleware = require(
  "./middlewares/loggerMiddleware"
);


// APP LEVEL MIDDLEWARES
app.use(express.json());

app.use(loggerMiddleware);


// ROUTES
app.use("/users", userRoutes);


// SERVER
app.listen(5000, () => {
  console.log("Server running on port 5000");
});