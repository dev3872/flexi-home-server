const express = require("express");
const fs = require("fs");
const path = require("path");
const port = 4000;
const app = express();

// Init Middleware
app.use(express.json());

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});
app.get("/name",(req,res)=>{
    res.json({name:'rohit',age:24});
})

app.listen(process.env.PORT || port, (err) => {
	if (!err) {
		console.log(`Server started at port ${port}`);
	} else {
		console.log(err);
	}
});
