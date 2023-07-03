const express = require("express");

const { getBlogs } = require("../controllers/blogs");

const router = express.Router();

router.route("/:id").get(getBlogs);

module.exports = router;
