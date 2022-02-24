const mongoose = require("mongoose");

module.exports = async () => {
  mongoose.Promise = global.Promise;
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  await mongoose.connect("mongodb://localhost:27017/hotel", options);

  mongoose.connection
    .once("open", () => console.log("MongoDB Running"))

    .on("error", (err) => console.log("Error", err));
};
