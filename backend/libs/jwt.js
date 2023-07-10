const jwt = require("jsonwebtoken");

module.exports.generateToken = ({ id, email, role }) => {
	const privateKey = process.env.TOKEN_KEY;
	return jwt.sign({ id, email, role }, privateKey, { expiresIn: 60 * 60 * 12 }); //12hr exp
};

module.exports.verifyToken = (token) => {
	try {
		const privateKey = process.env.TOKEN_KEY;
		return jwt.verify(token, privateKey);
	} catch (err) {
		return null;
	}
};
