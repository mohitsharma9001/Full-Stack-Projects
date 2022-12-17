import mongoose from "mongoose"
 export const connection =async ()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/AddUser",{useUnifiedTopology : true, useNewUrlParser : true})
        console.log("Database connected successfully")
    } catch (error) {
        console.log(error)
    }
}