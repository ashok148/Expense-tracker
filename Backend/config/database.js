const mongoose = require("mongoose");

module.exports = connectDatabase = async () => {
  await mongoose.connect(process.env.DATABASE)
    .then(() => {
      console.log(`Connected to database and listening to localhost ${process.env.PORT}`)
    }).catch((err) => {
      console.log(err, "databse connection fail!");
    });
};
