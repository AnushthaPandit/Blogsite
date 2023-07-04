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

exports.getSingleRawBlog = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	let q = "select * from blogs where blog_id=" + id;
	const { rows, rowCount } = await pool.query(q);

	let data = rows[0];

	if (rowCount) {
		let q =
			"select * from blog_sets where blog_id=" + id + " order by set_id asc";
		const { rows, rowCount } = await pool.query(q);

		data.sets = [];

		if (rowCount) {
			data.sets.push(...rows);
		}
	}

	res.send({ message: "Fetched Successfully!", data });
});

exports.updateBlog = asyncHandler(async (req, res, next) => {
	const { id } = req.params;

	const {
		header_image,
		title,
		desc,
		h1,
		h2,
		bottom_bar_h3,
		bottom_bar_h5,
		sets,
		btn_1_text,
		btn_1_url,
		btn_2_text,
		btn_2_url,
	} = req.body;

	const slug = slugify(title);

	let q = `UPDATE blogs SET 
					title=$1,
					header_image=$2,
					h2=$3,
					h1=$4,
					"desc"=$5,
					bottom_bar_h5=$6,
					bottom_bar_h3=$7,
					btn_1_text=$8,
					btn_1_url=$9,
					btn_2_text=$10,
					btn_2_url=$11,
					slug=$12
				WHERE
					blog_id=$13
			`;
	let values = [
		title,
		header_image,
		h2,
		h1,
		desc,
		bottom_bar_h5,
		bottom_bar_h3,
		btn_1_text,
		btn_1_url,
		btn_2_text,
		btn_2_url,
		slug,
		id,
	];

	await pool.query({ text: q, values });

	if (sets.length) {
		for (let i = 0; i < sets.length; i++) {
			const setData = sets[i];

			//if not set id then insert
			if (!setData.set_id) {
				q = `INSERT INTO blog_sets 
				("para_title", "para", "single_image", "slide_image", "carousel", "blog_id") 
				VALUES ($1, $2, $3, $4, $5, $6)`;

				values = [
					setData.para_title,
					setData.para,
					setData.single_image,
					setData.slide_image,
					setData.carousel,
					id,
				];

				await pool.query({ text: q, values });
			} else {
				q = `UPDATE blog_sets SET 
					para_title=$1,
					para=$2,
					single_image=$3,
					slide_image=$4,
					carousel=$5
				WHERE
					set_id=$6
			`;
				values = [
					setData.para_title,
					setData.para,
					setData.single_image,
					setData.slide_image,
					setData.carousel,
					setData.set_id,
				];

				await pool.query({ text: q, values });
			}
		}
	}

	res.send({ message: "data updated successfully!", data: { blog_id: id } });
});
