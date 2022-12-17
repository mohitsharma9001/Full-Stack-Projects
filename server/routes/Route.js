import express from 'express';
import { AddUser, getUser, getData, editData, deleatUser, signUpUser,  } from '../controller/UserController.js';
const router = express.Router();

router.post("/add", AddUser)
router.get("/all", getUser)
router.get("/:id", getData)
router.post("/:id", editData)
router.delete("/:id", deleatUser)


export default router