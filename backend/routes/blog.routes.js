const express = require("express");

const auth = require("../middlewares/auth.middleware");
const {
	getAllBlogs,
	deleteBlog,
	createBlog,
	getSingleRawBlog,
	updateBlog,
} = require("../controllers/blogs");

const router = express.Router();

router.route("/").get(auth, getAllBlogs).post(auth, createBlog);
router
	.route("/:id")
	.delete(auth, deleteBlog)
	.get(auth, getSingleRawBlog)
	.put(auth, updateBlog);

module.exports = router;
