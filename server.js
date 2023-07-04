const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

const errorHandler = require("./backend/middlewares/errorHandler.middleware");
const apiRoutes = require("./backend/routes");

const app = express();
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

// // Serve static files from the "build" directory
app.use(express.static("build"));
app.use("/media", express.static("media"));

// Serve the index.html file for all routes
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use(errorHandler);

const port = 80;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
