require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });

        console.log("MongoDB connection successful");
    } catch (error) {
        console.log("Connection Failed");
        process.exit(1);
    }
}

module.exports = connectDB;