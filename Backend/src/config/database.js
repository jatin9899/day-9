const mongoose = require("mongoose");

const connectToDb = async () => {
    // console.log("Mongo URI:", process.env.MONGODB_URI); // DEBUG LINE

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to Database");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1);
    }
};

module.exports = connectToDb;
