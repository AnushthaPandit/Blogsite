const slugify = require("slugify");

const asyncHandler = require("../utils/asyncHandler");
const pool = require("../libs/pool");

exports.getAllBlogs = asyncHandler(async (req, res, next) => {
	let q = `SELECT * FROM blogs;`;

	const { rowCount, rows } = await pool.query(q);

	res.send({ message: "Fetched Successfully!", data: rows, total: rowCount });
});

exports.deleteBlog = asyncHandler(async (req, res, next) => {
	const { id } = req.params;

	//delete sets
	let q = "DELETE FROM blog_sets WHERE blog_id=" + id;
	await pool.query(q);

	//delete blog
	q = "DELETE FROM blogs WHERE blog_id=" + id;
	await pool.query(q);

	res.send({ message: "Data Deleted Successfully", data: { blog_id: id } });
});

exports.createBlog = asyncHandler(async (req, res, next) => {
	const { title, desc } = req.body;
	const slug = slugify(title);
	const header_image = "media/default.jpg";

	//query
	let q = `INSERT INTO blogs ("title", "desc", "slug", "header_image") VALUES ($1, $2, $3, $4) RETURNING blog_id`;
	let values = [title, desc, slug, header_image];
	const { rows } = await pool.query({ text: q, values });

	res.status(201).send({ blog_id: rows[0].blog_id, message: "Blog Created!" });
});
