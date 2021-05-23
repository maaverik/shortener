const express = require("express");
const { db } = require("./models/db");

const app = express();

app.get("/", (req, res) => {
	let user = req.query.name;
	if (!user) {
		user = "World";
	}
	res.send("Hello " + user);
});

db.sync()
	.then(() => console.log("DB works"))
	.catch((err) => console.error(err));

app.listen(4445, () => {
	console.log("Server started on localhost:4445");
});
