const express = require("express");
const { db } = require("./models/db");
const linksRoute = require('./routes/links')
const redirRoute = require('./routes/redirection')

const app = express();

app.use(express.json())
app.use('/api/links/', linksRoute)
app.use('/', redirRoute)

// db.sync({ force: true})	// drops dbs and creates
db.sync()
	.then(() => console.log("DB works"))
	.catch((err) => console.error(err));

app.listen(4321, () => {
	console.log("Server started on localhost:4321");
});
