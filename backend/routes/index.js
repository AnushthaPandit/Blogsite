const express = require("express");

const blogsRoute = require("./blog.routes");

const router = express.Router();

router.use("/blogs", blogsRoute);

module.exports = router;
