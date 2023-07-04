const express = require("express");

const auth = require("../middlewares/auth.middleware");
const { getAllBlogs, deleteBlog, createBlog } = require("../controllers/blogs");

const router = express.Router();

router.route("/").get(auth, getAllBlogs).post(auth, createBlog);
router.route("/:id").delete(auth, deleteBlog);

module.exports = router;
