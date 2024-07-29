import express from 'express';
import Users from '../Controllers/Controll-Users.js';
const router = express.Router();

router.post("/sign-in", Users.sign_in);
router.get("/getusers", Users.Allusers);


export default router;