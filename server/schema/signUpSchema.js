import mongoose from "mongoose";
// import autoIncrement from "mongoose-auto-increment"
const userSchema =new mongoose.Schema({
    name: String,
    email: String,
    password: {
        type: String,
        select: false
    }
    },{
        timestamps: true
     
})



const SignUpModal= mongoose.model('data',userSchema)

export default SignUpModal