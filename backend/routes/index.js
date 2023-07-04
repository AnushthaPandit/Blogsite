const express = require("express");

const blogsRoute = require("./blog.routes");
const userRoute = require("./user.routes");

const router = express.Router();

router.use("/blogs", blogsRoute);
router.use("/users", userRoute);

module.exports = router;
