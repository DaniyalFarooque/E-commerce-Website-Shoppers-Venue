require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes"); 

connectDB();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000 ;

app.use('/api/products', productRoutes);

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})