const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(morgan("dev"));
//initialize database
//const sequelize = require("./config/sequelize.js");
//sequelize.sync({ force: true, alter: false }).then(() => console.log("DB Connected"));

//routes
const userRouter = require("./routes/users.js");
const eventRouter = require("./routes/events.js");

app.use("/users", userRouter);
app.use("/events", eventRouter);

app.listen(PORT, () => console.log("Server listening on port " + PORT));
