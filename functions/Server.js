import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import users from '../Routers/Router-Users.js'; 
import serverless from 'serverless-http';

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers
app.use('/', users);
// מודול אקספורט
export const handler = serverless(app);
