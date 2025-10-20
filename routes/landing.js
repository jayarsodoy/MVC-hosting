// Previous code using CommonJS
// const express = require('express');
// const router = express.Router();
// router.get('/', (req, res) => {    
//     res.send('landing page' );
// });
// module.exports = router;

// ESM version
import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// Fix __dirname and __filename since they don’t exist in ESM by default
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

// Serve the landing page
router.get("/", (req, res) => {
  res.sendFile(join(__dirname, "../views/html/index.html"));
});

export default router;