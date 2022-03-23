const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const users = require("./routes/api/users");
const auth = require("./routes/api/auth");
const cors = require("cors")
const port = 4000;
const app = express();

// Init Middleware
app.use(express.json());
app.use(cors());
//connect Database
connectDB();

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});
app.use("/api/users", users);
app.use("/api/auth", auth);
app.listen(process.env.PORT || port, (err) => {
	if (!err) {
		console.log(`Server started at port ${port}`);
	} else {
		console.log(err);
	}
});
