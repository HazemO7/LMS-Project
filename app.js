// import libraryes

const express = require("express")

const app = express();
const mongoose = require("mongoose");


require("dotenv").config();
app.use(express.json());


const port = process.env.PORT || 3000;

const courseRoutes = require("./src/routes/courseRoutes");
app.use("/api/courses", courseRoutes);


// data base connection 
async function DBconted() {
        try {
            await mongoose.connect(process.env.DB_URL)
            console.log("Data Base Connected");
        } catch (error) {
            console.log("error in connction Data Base"); 
        }
    
}

DBconted();


//port listen
app.listen(port, ()=>{
    console.log(`server is listning on port ${port}`);
});
