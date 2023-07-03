const asyncHandler = require("../utils/asyncHandler");

exports.getBlogs = asyncHandler(async (req, res, next) => {
	const { id: blogId } = req.params;

	res.send({
		blogId,
	});
});
