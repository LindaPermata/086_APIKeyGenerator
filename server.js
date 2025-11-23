const express = require("express");
const mysql = require("mysql2");
const dbConfig = require("./config/db.config");
const path = require('path');
require('dotenv').config();
const session = require('express-session'); // Untuk login admin

const app = express();