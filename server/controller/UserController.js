import { secreat } from "./SECREAT.js";
import SignUpModal from "../schema/signUpSchema.js"
import User from "../schema/UserSchema.js"
import jwt from 'jsonwebtoken'
export const AddUser =async (req,res) => {
  const user = req.body
  const newUser = new User(user)

  try {
   await newUser.save()
   res.status(201).json(newUser)
  } catch (error) {
    res.status(400).json({message : error.message})
  }
}


export const getUser =async (req,res) => {
    try{
        const users = await User.find({});
        res.status(200).json(users);
    }catch( error ){
        res.status(404).json({ message: error.message })
    }
  
  }
  export const getData =async (req,res) => {

    try{
       
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    }catch( error ){
        res.status(404).json({ message: error.message })
    }
  
  }
  export const editData =async (req,res) => {
  let user = req.body;
  const editUser = new User(user)
    try{
       
        const user = await User.updateOne({_id : req.params.id}, editUser);
        res.status(201).json(editUser);
    }catch( error ){
        res.status(409).json({ message: error.message })
    }
  
  }
  export const deleatUser = async (request, response) => {
    try{
        await User.deleteOne({_id: request.params.id});
        response.status(201).json("User deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}
 
export const signUpUser = async (req,res) => {
  try {
    const user = req.body;

    const check = await SignUpModal.findOne({email: user.email});
    if (check) {
        return res.status(400).send({message: 'User already exists'});
    }
    let newUser = await SignUpModal.create(user);
    newUser = newUser.toJSON();
    delete newUser.password;
    return res.status(200).send(newUser);
} catch (err) {
    return res.status(500).send(err);
}
} 

export const loginUser =async (req,res) => {

let token = "234@#!$554asdag5678"
try{
  const data = req.body;
  let UserData = await SignUpModal.findOne(data);
  UserData = UserData.toJSON();
  delete UserData.password;
 // console.log(foundUser)
 if(UserData)  res.status(201).send({message : `logged in successfully`, token, UserData })
 else res.status(404).send("User not registered");
 
}
catch(err){
  return res.status(500).send(err);
 } 
}
