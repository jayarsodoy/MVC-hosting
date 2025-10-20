// Previous code using CommonJS
// const express = require('express');
// const router = express.Router();

// router.get('/addUser', (req, res) => {
//     // Logic to create a new user
//     res.send('User created');
// });

// router.get('/deleteUser', (req, res) => {
//     // Logic to create a new user
//     res.send('User deleted');
// });

// module.exports = router;

import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import multer from "multer";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// Fix __dirname and __filename since they don’t exist in ESM by default
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { showAddUserPage } from "../controllers/userController.js";
const router = express.Router();

// Simple rendering of add user page
// router.get("/addUser", (req, res) => {
//   // Logic to create a new user
//   res.send("User created");
// });

// Render add user page with user list
router.get("/addUser", showAddUserPage); // Call controller function. Data fetched inside the controller

router.get("/deleteUser", (req, res) => {
  res.sendFile(join(__dirname, "../public/html/user-pages/delete.html"));
});


export default router;
