const express = require("express");
const cors = require("cors");
const routes = require("./routes/v1");
const passport = require("passport");
const { jwtStrategy } = require("./config/passport");
const { ApiError } = require("./utils/ApiError");
const httpStatus = require("http-status");

const app = express();

/* parse json request body */
app.use(express.json());
/* parse urlencoded request body */
app.use(express.urlencoded({ extended: true }));
/* enable cors */
app.use(cors());
app.options("*", cors);

// Passport jwt authentication config
app.use(passport.initialize());
// use passport middleware
// map "jwt" strategy to jwtStrategy file
passport.use("jwt", jwtStrategy);

/* Reroute all API requests starting with 'v1' route */
app.use("/v1", routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

module.exports = app;
