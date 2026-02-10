//  server start karna 
// database se connect karna

// cluster => storage + processor
//databse => use to store data
require("dotenv").config();
const app = require("./src/app");   
const mongoose = require("mongoose");
const connectToDb = require("./src/config/database");


connectToDb();




app.listen(3000, function () {
  console.log("Server is running on port 3000");
});