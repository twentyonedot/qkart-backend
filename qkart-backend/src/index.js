const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");

mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
  console.log("Database connected successfully");
  app.listen(config.port, () => {
    console.log("Listening to port: ", config.port);
  });
});
