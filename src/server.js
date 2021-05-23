const express = require("express");
const { db } = require("./models/db");
const linksRoute = require('./routes/links')

const app = express();

app.use('/api/links/', linksRoute)

db.sync()
	.then(() => console.log("DB works"))
	.catch((err) => console.error(err));

app.listen(4445, () => {
	console.log("Server started on localhost:4445");
});
